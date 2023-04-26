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

## Workflow

1. Create a simple Hello World application
1. Package the app into a container image
1. Upload the container image to Container Registry
1. Then deploy the container image to Cloud Run.

## Deploy on Google Cloud Run

1. Submit a new Container Image
```bash
$ gcloud builds submit --tag gcr.io/irmobi-trisul-a3126/irmobi-scrap
```
2. [Access Google Cloud Run Deploy](https://console.cloud.google.com/run/deploy/us-central1/nfmb-xml?authuser=1&project=infomobi-v4)
3. Select Container Image
4. Click on Deploy