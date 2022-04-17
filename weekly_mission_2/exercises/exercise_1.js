const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())



const issue = {
   title: "Problema con fork",
   repositoryNameAssociated: "playbook",
   status: Completed,
   numberOfComments: 10,
   labels: 2,
   author: "mibarra24",
   dateCreated: "03/20/2022",
   lastUpdated: "03/27/2022",
   getTitleAndAuthor: function() {
     return this.title + this.author
   },
   getGeneralInfo: function(){
     return `This repository ${this.title} was created by ${this.author}`
    }
   }
   console.log("Nombre de la issue:" + issue.name)
   console.log("Nombre y autor del issue:" + issue.getTitleAndAuthor)
   console.log(issue.getGeneralInfo())
   


const pull_request = {
   title:"playbook",
   author: "mibarra24",
   branchName:"main",
   dateCreated:"April 17 2022",
   status:"open",
   repositoryNameAssociated:"visualpartnership/playbook",

   getStatus: function() {
     return this.status
   },
   getTitleAndAuthor: function() {
     return `This repository ${this.title} was created by ${this.author}`
   }
  }

  console.log("Quien realizo el pull request:" + pull_request.author)
  console.log("Este pull fue hecho desde el repositorio:" + pull_request.repositoryNameAssociated)
  console.log(pull_request.getTitleAndAuthor)

console.log("Ahora te pido modelar objetos de las siguientes plataformas, puedes desarrollar esto como tu gustes, ve a cada app y mira la información que puedes modelar. (Tu determinas los valores de cada llave, son meramente didacticos):")

console.log("Twitter")

const profile = {
  user: "Vosnio",
  username: "paralink",
  bio: "No me sigas si te gusta la pizza con piña",
  age: 29,
  following: 804,
  followers: 839,
  JoinDate: "Mayo 2009",
  
  getUsernameAndBio: function(){
    return this.username + this.bio 
  },

  getGeneralInfo: function(){
    return `This user ${this.username} has ${this.followers} and follows ${this.following} users since joined in ${this.JoinDate}`
   }
  }

  console.log("Nombre en la cuenta:" + profile.name)
  console.log("Informacion del usuario:" + profile.getUsernameAndBio)
  console.log(profile.getGeneralInfo())

const trending_topic = {
  hashtag: "#ThorLoveAndThunder",
  Genere: "Movies",
  Country: "USA",
  Tweets: 48000,

  getHashtagAndGenere: function(){
    return this.hashtag + this.Genere
  },

  getTweetsAndCountry: function(){
    return `${this.hashtag} is popular in ${this.Country} with over ${this.Tweets} about it`
  }
 }

  console.log("Tema en tendencia:" + trending_topic.hashtag)
  console.log("Informacion de la tendencia:" + trending_topic.getHashtagAndGenere)
  console.log(trending_topic.getTweetsAndCountry())

 console.log("Facebook")

 const perfil = {
   name: "Marco",
   friendsNumber: 239,
   numberofPosts: 1090,
   photos: 150,

   getNameandFriends: function() {
     return this.name + this.friendsNumber
   },

   getPostandPhotos: function() {
     return `${this.name} has uploaded ${this.photos} and published ${this.numberofPosts} post`
   }
 }

  console.log("Nombre del usuario:" + perfil.name)
  console.log("Amigos del usuario:" + perfil.friendsNumber)
  console.log(perfil.getPostandPhotos())


  const post = {
    title: "A day in the Cinemas",
    datePublished: "April 17 2022",
    numberOfShares: 30,
    numberOfReactions: 20,
    numberOfComments: 45,

    getNameAndCommets: function () {
      return this.title + this.numberOfComments
    },

    getReactionsAndShares: function () {
      return `${this.title} received ${this.numberOfReactions} reactions and ${this.numberOfShares} shares`
    }
  }

  console.log("Nombre del post:" + post.title)
  console.log("Comments:" + post.numberOfComments)
  console.log(post.getReactionsAndShares())

 const biography = {
   name: "Marco Ibarra",
   birthdate: "August 7",
   workplace: "Gamesa",
   interestedIn: "Girls",
   academicFormation: "Studied at ITESM",
   placeOfRescidence: "Ciudad Obregon",
   languages: "Spanish",

   getNameAndBDay: function() {
     return this.name + this.birthdate
   },

   getGeneralInfo: function() {
     return `${this.name} lives in ${this.placeOfRescidence}, works in ${this.workplace} and is interested in ${this.interestedIn}`

   }
 }

 console.log("Nombre en la biografia:" + biography.name)
 console.log("Estudio y trabaja en:" + biography.academicFormation + biography.workplace)
 console.log(post.getGeneralInfo())

 console.log("uber")

 const uberprofile = {
   name: "Marco",
   stars: "4.86",
   number: "5523876987",
   mail: "marcodzeko@gmail.com",
   numberOfTravels: "122",

   getName: function(){
     return this.name + this.numberOfTravels
   },

   getGeneralInfo: function() {
     return `${this.name} has ${this.stars} stars in ${this.numberOfTravels} travels`

   }
 }

 console.log("Nombre del usuario:" + uberprofile.name)
 console.log("Estrellas ganadas por el usuario:" + uberprofile.stars)
 console.log(post.getGeneralInfo())

 const travel ={
   driversName: "Rodrigo",
   dateAndHour: "19/02/22 7:18 pm",
   travelprice: "31.50MX",
   starsForDriver: "5",
   origin: "calle sahuaripa",
   destination: "calle munich",

   getName: function() {
     return this.driversName
   },

   getGeneralInfo: function() {
     return `The travel was in ${this.dateAndHour} from ${this.origin} to ${this.destination} by the driver ${this.driversName} for ${this.travelprice}`

   }
 }

 console.log("Nombre del conductor" + travel.driversName)
 console.log("Estrellas ganadas por el conductor:" + travel.starsForDriver)
 console.log(post.getGeneralInfo())

