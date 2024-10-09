# create_commits.sh
#!/bin/bash

start_date="2024-09-25"
end_date="2024-10-02"

current_date="$start_date"

while [[ "$current_date" < "$end_date" ]]; do
    # Generate a random number of commits between 1 and 10
    num_commits=$((RANDOM % 11 + 3))

    for ((i = 0; i < num_commits; i++)); do
        # Format the date for the commit
        formatted_date=$(date -j -f "%Y-%m-%d" "$current_date" +"%Y-%m-%dT%H:%M:%S")

        # Make a commit with the formatted date
        GIT_COMMITTER_DATE="$formatted_date" git commit --allow-empty --date="$formatted_date" -m "Commit $((i + 1)) for $current_date"
    done

    # Move to the next day -> 1chmod +x create_commits.sh then -> ./create_commits.sh
    current_date=$(date -j -v+1d -f "%Y-%m-%d" "$current_date" +"%Y-%m-%d")
done