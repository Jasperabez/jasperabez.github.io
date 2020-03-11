---
layout: post
title: Using AWS Rekognition For Facial Recognition
---
Facial recognition is kind of neat, and had been quite widely use as a quick and dirty way of identifying an individual.

Traditionally to implement Facial recognition we need to:

1. Identify Faces in an Image

2. Extract features from the face

3. Store the features from step 2 in a database, tagged with a name/index

3. Repeat Step 1 and 2, and compare the new features with all the faces in the database using a classifier then you will get the desired name/index

There're some great libraries that you can use to implement these steps, such as the ["face_recognition"](https://github.com/ageitgey/face_recognition) library by [Adam Geitgey](https://github.com/ageitgey), which does ease the process relatively. However there's still a fair bit of work to setup and deploy, with some accuracy issues. 

Hence, depending on time limitations and the scpoe of your project you might want to opt for a tool like AWS Rekognition which greatly simplifies and abstracts the steps for doing facial recognition for you.

Just a short note however, AWS rekognition have no GUI available on the AWS web console, hence I'll also provide the steps to setting up AWS programmatic access in this guide.

# Step 1 - Setting up AWS programmatic access

1. Login to AWS management console

2. Click on **Services** > **IAM** (found under the section “Security, Identity & Compliance).

3. On the sidebar, click on **Users*. 

4. Click on **Add user**.

5. Fill in your desired Username, and **tick Programmatic access** under **Select AWS access type**, proceed by clicking **Next: Permissions**

6. Click **Attach exisitng policies directly** and Search for **AmazonRekognitionFullAccess** and tick the option. You can opt for ticking **AdministratorAccess** if you are using the same user for future projects. Procced by clicking **Next: Tags**.

7. Skip the Add tags (optional) page, by clicking **Next: Review**.

8. In the Review page, check your options are selected correctly and complete the process by clicking **Create user**

9. You'll be redirected to a Successful page, copy the **Access key ID** and **Secret Access Key** and paste it somewhere secure.

## For Windows Users
a. Paste in your **Access key ID** and **Secret Access Key** into a file called **credentials** located inside the folder
```
%USERPROFILE%/.aws
```
Full path: 
```
%USERPROFILE%/.aws/credentials
```
following the format
```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```
## For Linux Users
Paste in your **Access key ID** and **Secret Access Key** into a file called **credentials** located inside the folder
```
~/.aws
```
Full path: 
```
~/.aws/credentials
```
following the format
```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

# Step 2 : setting up the python script

1. Download the code from this [gist](https://gist.github.com/Jasperabez/3655402640ae8b99946213d525228c59)

2. import the relevant libraries
```
pip install boto3 pillow
```

2. point the function add2col (line 41) and check_face (Line 42) to your image path(only one face per image), and type in the person's name replacing 'PersonNAME'

3. run if the console prints back the same name you typed in, everything is working


