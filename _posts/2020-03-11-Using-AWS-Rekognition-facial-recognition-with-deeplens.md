---
layout: post
title: Using AWS Rekognition facial recognition with deeplens
---

Deeplens is a cool product from AWS, so called a "deep learning enabled video camera" that let you to deploy machine learning models easily to it, and run inference on the live feed. Kind of a like a Raspberry Pi with webcam, but much powerful and easier to setup(that's if you are familiar with AWS). 

Face recognition, is a complex problem that takes several steps as mentioned in my previous post on ["Using AWS Rekognition For Face Recognition"]({{ site.baseurl }}/Using-AWS-Rekognition-For-Face-Recognition/). 

Although we can definitely train on a specific individual face using object detection model methodologies, it is more suited for smaller datasets and doesn't scale well in terms of more faces being added into the model. 

As such we opt to instead do the face detection on the Deeplens ecosystem, then pass the found face to a dedicated face recognition system that can also be run locally on the deeplens as well or to the cloud. In this guide we pass our faces to AWS rekognition which I had well covered on how to setup face recognition on over [here]({{ site.baseurl }}/Using-AWS-Rekognition-For-Face-Recognition/).

# Step 1 - Setup your Deeplens

1. Register your Deeplens to your AWS account using the [AWS Developer guide](https://docs.aws.amazon.com/deeplens/latest/dg/deeplens-getting-started-register.html), enable the SSH option when setting up internet connection.

2. Get your Deeplens ip address from your Deeplens device's page, and use that ip to SSH in using a SSH client, with the username being 'aws_cam' and password whatever you had keyed in during the setup

    ![ip-address]({{ site.baseurl }}/images/ipaddr-dl.png)

3. install the necessary dependencies for Image processing of JPEG (libjpeg) in the SSH session

    ```
    sudo apt-get install libjpeg-dev
    ```

4. Go to IAM management on AWS web console, Services > IAM (under Security, Identity, & Compliance)

    ![iam]({{ site.baseurl }}/images/console-page-rekog-tut.png)

5. Click roles, and search for **AWSDeepLensGreengrassGroupRole** and select it

    ![greengrass-role]({{ site.baseurl }}/images/ggrole-dl.png)
    

6. Select **Attach policies** and search for **AmazonRekognitionReadOnlyAccess** and select it, at the bottom select **Attach policy** to finish

    ![attach-policy]({{ site.baseurl }}/images/attach-pol-dl.png)

# Step 2 - create Deeplens project

1. Go to Deeplens page on AWS web console, Services > Deeplens (under Machine learning). 

    ![select-deeplens]({{ site.baseurl }}/images/deeplens-dl.png)

2. Select **Projects** from the side menu, and click **Create new project**.

    ![select-deeplens]({{ site.baseurl }}/images/create-prog-sel-dl.png)

3. Choose **Use a project template** select **Face detection** and click **Next** to proceed.

    ![select-template]({{ site.baseurl }}/images/proj-temp-sel-dl.png)

4. On **Specify project details** enter your desired name and details before clicking **Create**

    ![review]({{ site.baseurl }}/images/finish-create-dl.png)

5. Clone this git reposistory from [here](https://github.com/Jasperabez/deeplens-rekognition-lambda)
    ```
    git clone https://github.com/Jasperabez/deeplens-rekognition-lambda.git
    ```

6. Zip it using into a .zip file using any tool(7zip, Winrar)

7. Update your lambda with it using AWS CLI, if you don't have AWS CLI follow this [guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

    ```
    aws lambda update-function-code --function-name deeplens-face-detection --zip-file fileb://deeplens-rekognition-lambda.zip
    ```

    make sure the zip-file path is correct

# Step 3 - deploy your project to AWS Deeplens

1. Back to the deeplens project page, select your created project

    ![select-project]({{ site.baseurl }}/images/sel-fin-proj-dl.png)

2. Select **deploy to device**, choose the device you've created in Step 1 and click **review**

    ![select-project]({{ site.baseurl }}/images/deploy-butt.png)

    ![target-device-selection]({{ site.baseurl }}/images/target-dev-dl.png)

3. After you click **Deploy** you should be redirected to your device page, and see the model deployment progress.

4. Once you see **Deployment of project Face-detection, version 1 succeeded.**, view the video stream by following [this guide](https://docs.aws.amazon.com/deeplens/latest/dg/deeplens-viewing-output.html).

5. To view MQTT messages follow these guidelines, that is listed on your Deeplens device's page

    ![target-device-selection]({{ site.baseurl }}/images/mqtt-guidelines-dl.png)

    message format is either '{ }' or '{name:..., confidence:..., face:...}'
    
    face represents how confidence the deeplens model think that's a face