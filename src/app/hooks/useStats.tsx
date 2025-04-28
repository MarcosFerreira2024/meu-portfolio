"use client"
import React, { useEffect } from 'react'
import { fetchGitStatus } from '../helper/github';



function useStats() {
    const [repos, setRepos] = React.useState(0);
    const [commits, setCommits] = React.useState(0);



    useEffect(()=>{
        const fetchData = async () => {
            try {
              const data = await fetchGitStatus();
              if(data){
                setRepos(data.repos);
                setCommits(data.commits);
                return
              }
              throw new Error("Nenhum dado encontrado");
            } catch (error) {
              console.error("Erro ao buscar dados:", error);
            }
        }
        fetchData()
    },[])
      

  return {
    repos,
    commits
  }

}

export default useStats
