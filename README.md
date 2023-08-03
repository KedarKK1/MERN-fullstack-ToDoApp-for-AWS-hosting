<h1 align='center' style="font-size:5rem"><b>Todo List Website for AWS Hosting</b></h1>

Added Batch file to open both client and server on clicking batch file!

</div>
<br><br><br>
<h2 align='center'>
    This is a website for you to write what you want to do after or done before and manage it.
</h2>

<br><br><br>

<div align='center'>
    <h2>LogIn</h2>
    <img style='border-radius:5px' src="https://github.com/0AliReza0/MERN-Stack-todo-website/blob/517cfce1e892ad694cc8c8c5af4bab25c2a1c19d/images/login.png"></img>
    <br>
    <br><br><br>
    <h2>SignUp</h2>
    <img style='border-radius:5px' src="https://github.com/0AliReza0/MERN-Stack-todo-website/blob/2781e0f26fea89f3f6bce58a415c8a10a40bd9ba/images/signup.png"></img>
    <br><br><br>
    <h2>Main</h2>
    <img style='border-radius:5px' src="https://github.com/0AliReza0/todo-list-website/blob/bf8e78f50ecac4cb919de828eac66acd63ca2d3c/images/main.png"></img>
</div>
<hr>

<br><br><br><br>

<h1 align='center'><b>Abilities</b></h1>

<ul>
<li> Able To Run Server</li>
<li> Able To Login and Signup and even log-out</li>
<li> Able To add a task and remove it</li>
<li> Able To making tasks checked</li>
  </ul>

<hr>
<br><br><br><br>
<h1 align='center'><b>Language and technologies used in This Project</h1>
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"></img>
<img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"></img>
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></img>
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></img>
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></img>

<br><br><br><br>

<h1 align='center'><b>Requirements</b></h1>

Download and install `NodeJS` from official website <a href="https://nodejs.org/">nodeJS.org</a>

<br>

Download and install `MongoDB` from official website <a href="https://www.mongodb.com/try/download/community">mongoDB.com</a>

<br><br><br><br>

<h1 align='center'><b>How To Run</b></h1>

At first you have to clone the project and open it in `IDE`

<br>

- Method one -

```
npm run start-both
```

(If any error, then use

```
chmod +x start_client.sh
chmod +x start_server.sh
chmod +x start_both.sh
sudo apt install dos2unix # to convert convert the line endings of the script to Unix format (LF) using the dos2unix utility
dos2unix start_client.sh
dos2unix start_server.sh
dos2unix start_both.sh
./start_both.sh # starting both server & client
```

If it gives mongoDB error, as MongoDB atlas is not configured for your EC2 VM network ip address,
check your ec2 ip address using

```
ssh -i /path/to/your/key.pem ubuntu@your_ec2_public_ip
curl ifconfig.me
```

Create .env file inside /server module and give it

```
MONGODB_API_KEY=your_ec2_instance_link_without_ending_/_sign
EC2_API_KEY=your_ec2_instance_link_without_ending_/_sign
LOCAL_API=https://localhost

eg.
MONGODB_API_KEY=mongodb+srv://myaccounthere:mypasswordhere@kosh@awstodolistcluster.g5d>
EC2_API_KEY=http://ec2-36-247-136-16.ap-south-1.compute.amazonaws.com
LOCAL_API=https://localhost
```

)

<br>

- Method 2 -

Open IDE's terminal and then write `~ cd server` and enter

<br>

After that write `~ npm i` and enter

<br>

type `~ npm start` and then enter

<br>

Now open another terminal and write `~ cd client`

<br>

And then write `~ npm i` and `~ npm start`

<br>

Congratulations ,now you can `signup` and use the website

Dummy user =>
username - JayeshJadhav
password - JayesJadha@123
