async function getTotalCommits(repo) {
    // Fetch data from GitHub API for the given repo
    const response = await fetch(`"https://api.github.com/users/sankalpbarriar/repos"/${repo}/commits?per_page=1&page=1`);

    // Check for successful response
    if (!response.ok) {
        throw new Error(`GitHub API responded with status ${response.status}`);
    }

    // Extract Link header
    const linkHeader = response.headers.get('Link');

    // Use regular expression to find the number of pages (total commits)
    const lastPageMatch = linkHeader.match(/page=(\d+)>; rel="last"/);

    if (!lastPageMatch) {
        throw new Error('Cannot determine total commits from the Link header');
    }

    return parseInt(lastPageMatch[1], 10);
}

// Example usage:
getTotalCommits('microsoft/vscode')
    .then(totalCommits => {
        console.log(`Total commits: ${totalCommits}`);
    })
    .catch(error => {
        console.error(error.message);
    });