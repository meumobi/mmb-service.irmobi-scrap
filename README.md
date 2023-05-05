# mmb-service.website-scraper

The aim of this project is to scrape a websites, extract out useful information and export it in XML format.

Extract and result structure are made by a specific provider on `./providers/`. Then the result is finally converted to XML on generic `index.js`.

Below an example of XML result produced by `./providers/TRI-events.js`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<events>
   <event id="26500">
      <title>Lorem ipsum</title>
      <start_date>2023-11-14 00:00:00</start_date>
      <end_date>2023-11-15 00:00:00</end_date>
      <where />
      <description />
   </event>
</events>
```

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequesities

#### Install packages

```sh
$ npm install
```

#### Setup env vars

```sh
$ echo "WEBPAGE_URL=https://webpage-to-scrap" >> .env
```

- `WEBPAGE_URL`: mandatory
- `UUID_NAMESPACE`: optional // https://www.uuidgenerator.net/
  - example `UUID_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341'`;


### Run locally

```sh
$ node index.js
```

With Node.js v19.0.0 and v18.11.0+ you can [run node in ‘watch’ mode](https://nodejs.org/en/blog/announcements/v19-release-announce#node---watch-experimental) using the node `--watch` option. Running in ‘watch’ mode restarts the process when an imported file is changed.

## Running the tests

```sh
$ npm run test
```

## Deployment

See below how to [deploy NodeJS service on Google Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service).

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
% gcloud init
```

### Deploy on Google Cloud Run

 [Deploy new services and new revisions to Cloud Run directly from source code](https://cloud.google.com/run/docs/deploying-source-code) using a single gcloud CLI command, gcloud run deploy with the --source flag.

```sh
mmb-service.irmobi-scrap % gcloud config set run/region southamerica-east1 
mmb-service.irmobi-scrap % gcloud run deploy irmobi-scrap --source .
API [run.googleapis.com] not enabled on project [971061791161]. Would you like to enable and retry (this will take a few minutes)? (y/N)?  y

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
Service URL: https://irmobi-scrap-loremipsum-rj.a.run.app
%
```

### Use environment variables on Google Cloud Run

https://cloud.google.com/run/docs/configuring/environment-variables#setting-services

```sh
% gcloud run services update irmobi-scrap --set-env-vars "WEBPAGE_URL=..." --set-env-vars "UUID_NAMESPACE=..."
````
