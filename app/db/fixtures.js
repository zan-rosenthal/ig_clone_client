import { range } from 'ramda'

export default {
  "users": [
    {
      "id": 1,
      "posts": range(1,20),
      "followers": range(1, 275),
      "following": range(1, 300),
      "profileImage": "https://fillmurray.com/200/300", 
      "firstName": "Fill",
      "lastName": "Murray", 
      "fullName": "Fill Murray",
      "userName": "the_murricane",
      "profileIntro": "🏡 Chicago \n 🚀 @draftbit co-founder \n 🏖 I live for a living"
    }
  ]
}