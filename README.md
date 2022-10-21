Example Push Notification Server

## Installation with Docker

```bash
$ docker-compose up -d
```

## API
1. Get JWT token (authenticate) :GET  ``/api/v1/identity/authenticate``

>Query params:

```js

    username = "username"  // User name
    password = "psw" // Title of notification message

```

 > curl example :
```bash
curl "http://localhost:5000/api/v1/identity/authenticate?username=admin&password=secret"
```


2. Send message to device :POST  ``/api/v1/admin/send``

>Input params (Add Bearer authorization token):

```js
{
    "token":"client_token", // Client token
    "title":"Title",  // Title of notification message
    "body":"Body" // Body of notification message
}
```

 > curl example :
```bash
curl -H "Content-Type: application/json" --data '{"token":"client_token","title":"Title","body":"Body"}' http://localhost:5000/api/v1/admin/send/
```

3. Send message to Topic :POST  ``/api/v1/admin/send/:TOPIC_NAME``

> Input params (Add Bearer authorization token):

```js
{
    "token":"client_token", // Client token
    "title":"Title",  // Title of notification message
    "body":"Body" // Body of notification message
}
```

>curl example :
```bash
curl -H "Content-Type: application/json" --data '{"title":"Title","body":"Body"}' http://localhost:5000/api/v1/admin/send/PRICE_CHANGE
```

4. Subscribe device to Topic :POST  ``/api/v1/pns/subscribe/:TOPIC_NAME``

> Input params (Add Bearer authorization token):

```js
{
    "token":"token"
}
```

>curl example :
```bash
curl -H "Content-Type: application/json" --data '{"token":"token"}' http://localhost:5000/api/v1/pns/subscribe/PRICE_CHANGE
```

5. Subscribe device to Topics :POST  ``/api/v1/pns/subscribe``

> Input params (Add Bearer authorization token):

```js
{
    "token":"token",
    "bundle_id": "bundle_id",
    "topics": ["topic1", "topic2", "topic3"]
}
```

>curl example :
```bash
curl -H "Content-Type: application/json" --data '{"token":"token", "topics": ["topic1"]}' http://localhost:5000/api/v1/pns/subscribe
```

6. UnSubscribe device from Topic :POST  ``/api/v1/pns/unsubscribe/:TOPIC_NAME``

> Input params (Add Bearer authorization token):

```js
{
    "token":"token",
    "bundle_id":"bundle_id",
}
```

>curl example :
```bash
curl -H "Content-Type: application/json" --data '{"token":"token"}' http://localhost:5000/api/v1/pns/unsubscribe/PRICE_CHANGE
```

7. UnSubscribe device from Topics :POST  ``/api/v1/pns/unsubscribe``

> Input params (Add Bearer authorization token):

```js
{
    "token":"token",
    "topics": ["topic1", "topic2", "topic3"]
}
```

>curl example :
```bash
curl -H "Content-Type: application/json" --data '{"token":"token", "topics": ["topic1"]}' http://localhost:5000/api/v1/pns/unsubscribe
```

8. UnSubscribe device from all Topics :GET  ``/api/v1/pns/unsubscribeall/:TOKEN``

> Input params (Add Bearer authorization token):

>curl example :
```bash
curl -H "Content-Type: application/json" http://localhost:5000/api/v1/pns/unsubscribeall/token
```

9. Get all Topics device subscribed to :GET  ``/api/v1/pns/channels/:TOKEN``

> Input params (Add Bearer authorization token):

>curl example :
```bash
curl -H "Content-Type: application/json" http://localhost:5000/api/v1/pns/channels/token
```



<<<<<<<<<<||||||(((((( Merry Christmas, ya filthy animal )))))))||||||>>>>>>>>>>>>>