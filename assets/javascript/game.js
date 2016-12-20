$(document).ready(function() {

var crystalGame = {

    randomNum: 0,
    counter: 0,
    wins:0,
    losses:0,
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
    // yourPick:0,

    newGame: function() {
        //setting randomNum a value b/w 19 and 120 (this is what the player must match)
        this.randomNum = Math.floor(Math.random() * 103) + 19;
        $("#randomNum").html(this.randomNum);
        console.log("the new randomNum is: " + this.randomNum);
        //reset counter to zero
        crystalGame.counter=0;

        //set gems to random numbers between 1-12:
        crystalGame.crystal1 = Math.floor(Math.random() * 12) + 1;
        crystalGame.crystal2 = Math.floor(Math.random() * 12) + 1;
        crystalGame.crystal3 = Math.floor(Math.random() * 12) + 1;
        crystalGame.crystal4 = Math.floor(Math.random() * 12) + 1;

        //log the different values:
        console.log("crystal 1: " + crystalGame.crystal1);
        console.log("crystal 2: " + crystalGame.crystal2);
        console.log("crystal 3: " + crystalGame.crystal3);
        console.log("crystal 4: " + crystalGame.crystal4);

        //display current value of counter (zero) and wins/losses
        $("#counter").html(crystalGame.counter);
        $("#wins").html(crystalGame.wins);
        $("#losses").html(crystalGame.losses);
    },
    //Will check which crystal was clicked; assign the value...
    // and update counter and wins/losses
    Score: function(event){

        var gemPicked = event.target.id;
        //may need to use 'crystalGame.' instead of "this."
        crystalGame.counter += crystalGame[gemPicked];
        $("#counter").html(crystalGame.counter);
        

        if(crystalGame.counter === crystalGame.randomNum){
            
            crystalGame.wins++;
            crystalGame.newGame();
            
        }
        else if(crystalGame.counter > crystalGame.randomNum){
            
            crystalGame.losses++;
            crystalGame.newGame();
            
        }

         
    },


};

// document.addEventListener("DOMContentLoaded", function(){

crystalGame.newGame();

// crystalGame.Score();

$('.gem').click(crystalGame.Score);

});


// });

// document.addEventListener("DOMContentLoaded", function(){}


// $(document).ready(function() {

    // newGame: function() {
    //     //setting randomNum a value b/w 19 and 120 (this is what the player must match)
    //     randomNum = Math.floor(Math.random() * 103) + 19;
    //     $("#randomNum").html(randomNum);
    //     console.log("the new random number is: " + randomNum);
    //     //reset counter to zero
    //     this.counter=0;

    //     //set gems to random numbers between 1-12:
    //     this.gem1= Math.floor(Math.random()*12) + 1;
    //     this.gem2= Math.floor(Math.random()*12) + 1;
    //     this.gem3= Math.floor(Math.random()*12) + 1;
    //     this.gem4= Math.floor(Math.random()*12) + 1;

    //     //log the different values:
    //     console.log("crystal 1: " + this.gem1);
    //     console.log("crystal 2: " + this.gem2);
    //     console.log("crystal 3: " + this.gem3);
    //     console.log("crystal 4: " + this.gem4);

    //     //display current value of counter (zero) and wins/losses
    //     $("#counter").html(this.counter);
    //     $("#wins").html(this.wins);
    //     $("#losses").html(this.losses);


    // },

    // //Will check which crystal was clicked; assign the value...
    // // and update counter and wins/losses
    // Score: function(event){

    //     var gemPicked = event.target.id;//may need to convert gem[i]Val to gem[i]
    //     //may need to use 'crystalGame.' instead of "this."
    //     crystalGame.counter += crystalGame[gemPicked];

    //     if(this.counter===this.randomNum){
    //         wins++;
    //         this.newGame();
    //     }

    //     else if (this.counter>this.randomNum){
    //         losses++;
    //         this.newGame();
    //     }

         
    // },










// });