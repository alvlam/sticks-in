function saveToFirebase(name, position) {
    var playerObject = {
        name: name,
        position: position
    };

    firebase.database().ref('players').push().set(playerObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(name, position);
