"use server"
export async function fetchGitStatus() {
    try {
      const username = "MarcosFerreira2024";

      const reposResponse = await fetch(`https://api.github.com/users/${username}`,
          {
              headers:{
                  Authorization: `Bearer ${process.env.GIT_HUB_KEY as string}`
              }
          }
      );


      const reposJson = await reposResponse.json()


      const commitsResponse = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
        headers: { Accept: "application/vnd.github.cloak-preview",
        Authorization: `Bearer ${process.env.GIT_HUB_KEY as string}` }
      });

      const commitsJson = await commitsResponse.json();

      return {
        commits: commitsJson.total_count,
        repos: reposJson.public_repos
      }

    } catch (error) {
      console.error("Erro :", error);
    }
  };
