# PWA Google Tag Manager Pixel

This app is an extension of the [Google Tag Manager App](https://github.com/vtex-apps/google-tag-manager) to add PWA Events for your store.

## How to install

First, you need to have the [Google Tag Manager App](https://github.com/vtex-apps/google-tag-manager) installed and configured on your store.

Then open the VTEX App Store and install the app on your store.

or

Run the following command:

```sh
vtex install vtex.pwa-gtm-pixel@0.0
```

## Google Tag Manager Setup

This guide provides instructions to setup all the necessary Tags, Triggers, Variables, and configurations to Google Tag Manager and Google Analytics, so at the end of it you will have all the PWA analytics available in your Google Analytics dashboard.

Open the Google Tag Manager dashboard at https://tagmanager.google.com/.

### Create Variables

#### Data Layer Variables

1. Click in Variable Configuration
2. Choose "Data Layer Variable"
3. Type "installWebApp" in "Data Layer Variable Name"
4. Click Save, and save as "Data Layer Variable - installWebApp"

Do the same thing for the variables: "userChoice".

### Creating Triggers

To create a Trigger, click on "Trigger" on the menu on the left and then on the button New.

#### Custom Events

1. Click in Trigger Configuration
2. Choose "Custom Event"
3. Type "installWebApp" in Event Name
4. Click Save, and save as "Custom Event - installWebApp"

### Creating Tags

To create a Tag, click on "Tags" on the menu on the left and then on the button New.

#### Google Analytics - PWA

1. Click in Tag Configuration
2. Choose "Google Analytics - PWA"
3. Choose Track Type as "Event"
4. Type "PWA" in Category
5. Type "{{Data Layer Variable - userChoice}}" in Action
6. Type "{{Event}}" in Label
7. In Google Analytics Settings choose "{{Google Analytics}}"
8. Choose the Triggers:
    1. "Custom Event - installWebApp"
9. Save as "Google Analytics - PWA"
