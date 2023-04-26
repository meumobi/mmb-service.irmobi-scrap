# mmb-service.irmobi-scrap

## Requirements

### Install the gloud cli

[Install the gcloud cli](https://cloud.google.com/sdk/docs/install)

```sh
% python3 -V
Python 3.9.10
% cd ~/Downloads
Downloads % curl https://sdk.cloud.google.com | bash
// When prompted do not install Python 3.7, it tooks long long time... to install.
Downloads % exec -l $SHELL
```

### Initialize the gcloud cli

Select your Google cloud account and project

```sh
 mmb-service.irmobi-scrap % gcloud init
```

## Deploy a Node.js service to Cloud Run

https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service

1. Create a simple Hello World application
1. Package the app into a container image
1. Upload the container image to Container Registry
1. Then deploy the container image to Cloud Run.

## Deploy on Google Cloud Run

 [Deploy new services and new revisions to Cloud Run directly from source code](https://cloud.google.com/run/docs/deploying-source-code) using a single gcloud CLI command, gcloud run deploy with the --source flag.

```sh
 % gcloud run deploy irmobi-scrap --source .
 API [run.googleapis.com] not enabled on project [971061791161]. Would you like to enable and retry (this will take a few minutes)? (y/N)?  y

Enabling service [run.googleapis.com] on project [971061791161]...
Please specify a region:
 [1] asia-east1
 [2] asia-east2
...
 [27] southamerica-east1
 [28] southamerica-west1
 [29] us-central1
...
 [38] cancel
Please enter numeric choice or text value (must exactly match list item):  27
API [artifactregistry.googleapis.com] not enabled on project [971061791161]. Would you like to enable and retry (this will take a few minutes)? (y/N)?  y

Enabling service [artifactregistry.googleapis.com] on project [971061791161]...
Deploying from source requires an Artifact Registry Docker repository to store built containers. A repository named [cloud-run-source-deploy] in region [southamerica-east1] 
will be created.

Do you want to continue (Y/n)?  y

This command is equivalent to running `gcloud builds submit --tag [IMAGE] .` and `gcloud run deploy irmobi-scrap --image [IMAGE]`

Allow unauthenticated invocations to [irmobi-scrap] (y/N)?  y

Building using Dockerfile and deploying container to Cloud Run service [irmobi-scrap] in project [irmobi-trisul-a3126] region [southamerica-east1]
⠶ Building and deploying new service... Uploading sources.                                                                                                                   
  ✓ Creating Container Repository...                                                                                                                                         
  ✓ Uploading sources...                                                                                                                                                     
⠶ Building and deploying new service... Uploading sources.                                                                                                                   
✓ Building and deploying new service... Done.                                                                                                                                
  . Routing traffic...                                                                                                                                                       
  . Setting IAM Policy...                                                                                                                                                    
  ✓ Building Container... Logs are available at [https://console.cloud.google.com/cloud-build/builds/e7ed532c-4944-4ffd-99e6-24db1eef7aa5?project=971061791161].             
  ✓ Creating Revision... Creating Service.                                                                                                                                   
  ✓ Routing traffic...                                                                                                                                                       
  ✓ Setting IAM Policy...                                                                                                                                                    
Done.                                                                                                                                                                        
Service [irmobi-scrap] revision [irmobi-scrap-00001-wal] has been deployed and is serving 100 percent of traffic.
Service URL: https://irmobi-scrap-brd7cebqvq-rj.a.run.app
%
```

## Use environment variables

https://cloud.google.com/run/docs/configuring/environment-variables#setting-services

```sh
mmb-service.irmobi-scrap % gcloud run services update irmobi-scrap --set-env-vars "NAME=vdias38"
````
