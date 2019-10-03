---
title: Privacy Policy
description: Privacy Policy for Noc
---

## Privacy Policy: Noc

Effective Date: September 11, 2019

In the following policy(hereinafter - the "Privacy Policy"), Noc refers to the service offered by NOCSI, Ltd. Liability Co. (the "Company" or "We") through the [nocsi.com/noc](http://nocsi.com/noc) website and the software provided through it (the "Service"). This Privacy Policy explains (i) what information we collect through your access and use of our Service, (ii) the use we make of such information, and (iii) the security level we provide for protecting such information. By visiting [nocsi.com/noc](http://nocsi.com/noc), installing and/or using the Noc application, mobile applications, and its Services, you consent to the terms outlined in this Privacy Policy.

## Philosophy

Our Company is committed to empower users to be more secure, maintain privacy and subsequently achieve digital sovereignty for themselves. The design philosophy & principles, that we employ for Noc, greatly restricts our ability to collect information on users. In areas of privilege wherein we could collect user data, we minimize the level and period of access. Data that is collected is by-design to only be what is necessary to operate the aforementioned services. Ultimately, it is our ideal that the information we can collect on you can likewise be collected by an adversary.

Products & Services developed at NOCSI are tailored out of pure necessity. The voice of the users will always be heard, however, our mentality is that we are both Service Providers and fellow users. It just so happens that we are the top dog users of the platform and get to dictate the immediate roadmap of the Noc platform. As proprietors of the platform, we define and dictate mandates to comprise the policy framework to which Noc and its associated applications adhere to.

The mandates are as follows:

- The Mandate of Ephemeralism
- The Mandate of Indirection
- The Mandate of Minimalism
- The Mandate of Provability
- The Mandate of Sovereignty

## Can Not, not Do Not

As a user of Noc, NOCSI can NOT do any of the following:

- Log users' traffic or the content of any communications
    - Users' traffic transit through
- Discriminate against devices, protocols, or applications
    - Again, we are not in a position to inspect your traffic
- Identify and compromise your anonymity

NOCSI has no interest in owning, touching, or looking at any of your data and will only seek data that is necessary for operations of the service.

## "Trust, but Verify" to Zero Trust

Users in the Noc ecosystem are expected to ultimately be responsible for their own cyber security infrastructure. Although we will employ a best-effort to go beyond our realm of control to assist users, it is ultimately the user's responsibility. NOCSI is building a suite of tools and services to better enable end users to have full authority and autonomy of their own cyber security infrastructure, with limited to no dependence on third party services that store and own their data. 

NOCSI seeks to adhere to a collection practice bounded by a 'need-to-know' policy. If a user's data is not a functional requirement for operations, then we do not want it. Through our policy framework, we hope to instill in users a greater distrust of any third-party entity, ourselves included. As a whole, we believe most service providers can and should operate with a fraction of user data they do now.

## Collection and Use of Personal Information (If any)

## Mandate of Minimalism

### In relation to Signup, User Authentication & Authorization:

We leverage the identifier granted from Sign in with Apple as the sole data unit to reference you.

Information that can be requested

- Apple Provided UID (Unique Identifier)
- Full Name (First and Last Name)
- Email Address/Apple Relayed Email Address
- Real User Status

Information we request in the scope

- Apple Provided UID (Unique Identifier)
- Apple Provided Real User Status

From a trust perspective, we are relying upon Apple to both authenticate and verify access to the Noc application and its services. Additionally, we depend on Apple to subsequently authorize access to Noc services. The Apple provided UID is married with Apple's subscription licensing and taken together is used to validate service access on our service gateway. This transaction is contained behind single-purpose service nodes and its communications are encrypted via Secure Socket Layer (SSL)

### In relation to Authenticating Against Service Providers

The Noc applications are restricted to authenticating to your Cloud Providers strictly through their respective OAuth Identity Services. For each Cloud Provider, we store an associated access & refresh token. These tokens are maintained within each device's (if available) secure enclave and otherwise only exist outside their secure storage during active use. 

Noc clients will only operate with the most minimum of privileges given the context of the operation. Given a task requiring a higher-level of privilege, the Noc client will request a higher-scoped Access Token. As a default behavior, the client will always attempt to reduce the resource scope and privileges on Access Tokens it holds in order to maintain  a state of least-privilege.

Should users opt-in, Noc does employ a best-effort in preemptive collection of stale or otherwise dangling credentials that are not in-use/not-needed. NOCSI, does not take responsibility for this effort however. Collection and proper disposal of credentials ultimately falls under the domain of the user.

### In relation to Third-Party Libraries & Services

The Noc service and its associated applications adhere to a general policy of minimizing use and reliance on Third-Party Libraries & Services. Primarily, the Noc clients utilize native iOS/macOS APIs and iCloud services.

The Noc mobile client uses and declares the following capabilities/entitlements:

* App Groups
* Background Services
	* Remote Notifications (CloudKit Core Data Sync)
* iCloud
	* iCloud Services
* Keychain Sharing
* Network Extensions
* Push Notifications
	* APS Environment (CloudKit Core Data Sync)
* Sign In with Apple

### In relation to Payment Processing

NOCSI utilizes Apple Store In-App Payments as a primary third-party service for collecting payment. Any payment card details  and associated PII fall outside the domain of NOCSI's control and fall under the payment processor's Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.

Details on Apple's Privacy Policy pertaining to Apple Store In-App Purchases can be found at:

https://www.apple.com/legal/privacy

### In relation to Apple iCloud Services

NOCSI makes available controls to opt-in to utilizing iCloud services. By enabling iCloud, users gain the following capabilities:

- CloudKit Core Data
- Keychain Sharing

Although we do not collect user location data, geolocation coordinates are computed for each server node utilized by Noc. We consider these records to be a source of PII metadata. These records are stored locally on the device but can be synced against iCloud to be shared with other user-enrolled devices. NOCSI does employ a best-effort to remove stale records. All else is at the behest of the user.

Should users opt-in to Keychain Sharing, they will be able to share Cloud Provider Access/Refresh tokens across their enrolled devices. Other Keychain items, such as Sign in with Apple identity tokens are restricted to the device.

Details on Apple's Privacy Policy pertaining to iCloud can be found at:

[https://www.apple.com/privacy/](https://www.apple.com/privacy/approach-to-privacy/)

### Mandate of Indirection

The Mandate of Indirection aims to minimize identifiable user patterns and add the necessary degrees of dissociation. Indirection, can be simple actions like requests via a proxy. Conversely, Indirection can be more elaborate - having your friend print out a webpage, another friend scans it and finally you viewing the webpage as a PDF.

If optioned, Noc Users will be able to employ Indirection techniques designed to diffuse predictability and preserve User Privacy.

### In relation to Metadata Emission

Mobile applications produce a lot of *chatter,* and as a result, attackers can exploit this to fingerprint and identify you. Noc users can opt-in to a reduced-emissions mode wherein we attempt a best-effort reduction:

- MapKit API look-ups are disabled
- Noc background services(if any) are disabled
- The Noc privacy feed functionality is disabled

All other executions within the Noc application are thusly to occur with user-presence. 

### In relation to Noc TestFlight & Apple StoreKit

Users enrolled in the Noc TestFlight Beta test program are subject to greater than normal levels of information collection. Users submitting crash dump & other debugging information to us acknowledge the potential for PII and other sensitive information to exist in the transmission.

Details on Apple's Privacy Policy pertaining to TestFlight can be found at:

[https://testflight.apple.com/#privacy-data](https://testflight.apple.com/#privacy-data)

### Data Handling

### Mandate of Ephemeralism

Like  with all things in life, things die. Noc Users acknowledge that any mode of operation, Noc Nodes (participating server instances) are coded to self-terminate. The operation will perform a best-effort to render both storage and network inert. Users acknowledge it the responsibility of an authorized Noc client, and by extension, the User itself, to subsequently remove any dangling Nodes.

### In relation to Noclet(s)

Noclets is a term used to categorize and define add-ons/functionality that can installed within your Noc network. Through normal operation, they are to only be accessed from within the Noc network and are not currently externally accessible. Data is to not persist outside of the execution of a Noclet and operations are to be immutable.

However, in the case that a User opts to enable a data-persistent Noclet, the user acknowledges and accepts the added uncertainty. Moving Data is a difficult problem - moving Data in a zero-trust environment with a mandate of privacy and security is more-so. Noc Users acknowledge that the Noc applications are acting in a best-effort to insert, hydrate and on-disposal - extract your data.

### In relation to Third-party disclosure

We do not sell, trade, or other to outside parties any of your data or Personally Identifiable Information. Frankly, storing your data is a waste of space.

### Retention of Data

NOCSI will retain your Apple-provided identifiers and relevant subscription information for as long as allowed by the service provider (Apple). These are necessary components in facilitating the services to users. When opportune to, NOCSI will roll the relevant materials, and perform such actions in a best-effort manner. 

### Tracking/Cookies and Other Technologies

NOCSI does not currently employ cookies nor tracking technologies. Cookies encountered through the use Noc and its services are not endorsed nor acknowledged by NOCSI as being associated with us. 

### Disclosure of Data

### Business Transaction

If NOCSI is involved in a merger, acquisition or asset sale, what data we have of you may be transferred. We acknowledge our lack of data collection serves to reduce our value as a company. We will provide prior notice before your identifiers and associated materials are transferred and becomes subject to a different Privacy Policy.

### Disclosure for Law Enforcement

Under certain circumstances, NOCSI may be required to disclose what data we have of you in order to comply with the law and/or valid requests made by an authorized authority (e.g. a court, government agency, being of greater power). 

NOCSI is not responsible for data that service providers may disclose about you, nor data users may have to disclose themselves in compliance with law enforcement. Users should review the relevant Privacy Policies with their respective service provider.

### Children's Privacy

Our Service does not acknowledge anyone under the age of 18 ("Children"). Although Noc and its associated applications are rated for all-ages, we do not want any data whatsoever pertaining to those under the age of 18. If you are a parent or guardian, and you are aware that your Child has somehow provided us with Personal Data, we ask that you contact us to remediate it.

### Fair Information Practices

The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.

In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:

- We will attempt to notify you via email within 72 hours - if there is an associable email address registered to your account identity

### Mandate of Sovereignty

The Mandate of Sovereignty is the collective of the other Mandates within the Privacy Framework. Taken together, as a User, you are granted not only full ownership and control, but the ability to rightfully distinguish command of your data. In essence, that is Data Sovereignty.

### Changes to This Privacy Policy

We may update your Privacy Policy to reflect the current state of Noc, its platform and associated clients. Your notification to any changes to the policy will be strictly through the use of this Privacy Policy as a boundary for access to our services. 

You are advised to review this Privacy Policy periodically for any changes.
