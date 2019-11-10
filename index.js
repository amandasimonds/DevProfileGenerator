const inquirer = require("inquirer");
const fs = require("fs");
const prompt = require("prompt");
const axios = require("axios");

inquirer.prompt([
      {
        type: "choices",
        name: "bgColor",
        message: "What is your favorite color?",
        choices: ["red", "orange", "yellow", "green", "blue", "violet"]
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
      },
    ]).then(function({ username }){
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function(res) {
            // const repoNames = res.data.map(function(repo) {
            //   return repo.name;
            // });
            const gitUserName = res.data.login;
            const gitProfileImg = res.data.avatar_url;
            const userLoca = res.data.location;
            const userGitProfile = res.data.html_url;
            const userBlog = res.data.blog;
            const userBio = res.data.bio;
            const repoNum = res.data.public_repos;
            const followerNum = res.data.followers;
            const starsNum = res.data.following;
            const followingNum = res.data.following;

            console.log(gitUserName);
            console.log(gitProfileImg);
            console.log("https://www.google.com/maps/search/?api=1&query="+userLoca);
            console.log(userGitProfile);
            console.log("https://"+userBlog);
            console.log(userBio);
            console.log(repoNum);
            console.log(followerNum);
            console.log(starsNum);
            console.log(followingNum);

            var resText = JSON.stringify(res.data, null, 2);
     
            fs.writeFile("log.txt", resText, function(err) {
            
              if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
            
            });

        })
    })

    // const questions = [
  
    // ];
    
    // function writeToFile(fileName, data) {
     
    // }
    
    // function init() {
    
    // init();
    