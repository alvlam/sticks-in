function saveToFirebase(player) {
    var playerObject = {
        player: player
    };

    firebase.database().ref('players').push().set(playerObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(player);
