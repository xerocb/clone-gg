import re
import random
from datetime import datetime, timedelta
from num2words import num2words

###################################################################################
# Champions

NUM_CHAMPIONS = 50

insert_statements = []

for i in range(1, NUM_CHAMPIONS+1):
    name = f"Champ{num2words(i).title().replace('-', '')}"
    insert_statements.append(f"INSERT INTO champions (name) VALUES ('{name}');")

script = "\n".join(insert_statements)

with open("generate-champions.sql", "w") as f:
    f.write(script)

###################################################################################
# Games

NUM_GAMES = 300

insert_statements = []

base_date = datetime.now()

for i in range(NUM_GAMES):
    start_offset = timedelta(days=random.randint(0, 30), hours=random.randint(0, 23), minutes=random.randint(0, 59), seconds=random.randint(0, 59))
    game_start = base_date - start_offset

    game_duration = timedelta(minutes=random.randint(0, 59), seconds=random.randint(0, 59))
    game_end = game_start + game_duration

    start_str = game_start.strftime("'%Y-%m-%d %H:%M:%S'")
    end_str = game_end.strftime("'%Y-%m-%d %H:%M:%S'")

    winning_team = random.choice(["red", "blue"])

    insert_sql = f"INSERT INTO games (winning_team, game_start, game_end) VALUES ('{winning_team}', {start_str}, {end_str});"
    insert_statements.append(insert_sql)

script = "\n".join(insert_statements)

with open("generate-games.sql", "w") as f:
    f.write(script)

###################################################################################
# Details

ROLES = ["top", "jgl", "mid", "bot", "sup"]
TEAMS = ["blue", "red"]
NUM_PLAYERS = 51

games = []
game_id = 1

insert_statements = []

with open("generate-games.sql", "r") as f:
    for line in f:
        if line.strip().startswith("INSERT INTO games"):
            match = re.search(r"VALUES\s+\(\s*'(\w+)',\s*'([^']+)',\s*'([^']+)'\)", line)
            if match:
                winning_team, game_start_str, game_end_str = match.groups()
                game_start = datetime.strptime(game_start_str, "%Y-%m-%d %H:%M:%S")
                game_end = datetime.strptime(game_end_str, "%Y-%m-%d %H:%M:%S")
                games.append((game_id, game_start, game_end))
                game_id += 1

for game_id, start, end in games:
    game_duration = (end - start).total_seconds() / 60
    used_player_ids = set()
    used_champion_ids = set()

    for team in TEAMS:
        for role in ROLES:
            while True:
                player_id = random.randint(1, NUM_PLAYERS)
                if player_id not in used_player_ids:
                    used_player_ids.add(player_id)
                    break

            while True:
                champion_id = random.randint(1, NUM_CHAMPIONS)
                if champion_id not in used_champion_ids:
                    used_champion_ids.add(champion_id)
                    break

            kpm = random.uniform(0, 0.5)
            dpm = random.uniform(0, 0.5)
            apm = random.uniform(0, 0.5)
            kills = int(round(kpm * game_duration))
            deaths = int(round(dpm * game_duration))
            assists = int(round(apm * game_duration))

            if role == "sup":
                cspm = random.uniform(0, 2)
            else:
                cspm = random.uniform(5, 12)

            creep_score = int(round(cspm * game_duration))

            insert_sql = f"INSERT INTO game_players (player_id, game_id, champion_id, team, role, kills, deaths, assists, creep_score) VALUES ({player_id}, {game_id}, {champion_id}, '{team}', '{role}', {kills}, {deaths}, {assists}, {creep_score});"
            insert_statements.append(insert_sql)

script = "\n".join(insert_statements)

with open("generate-game-details.sql", "w") as f:
    f.write(script)
