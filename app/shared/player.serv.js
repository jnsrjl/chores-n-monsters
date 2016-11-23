/**
 * Created by silvia on 11/15/16.
 */

angular.module('CareerGameApp').factory('Player', function(){

    return {
        stats : {
            gender: 'female',
            career: 'doctor',
            diamonds: 0,
            level: 1,
            items:  []
        }

        // setGender : function(gender){
        //     this.stats.gender = gender;
        // },
        //
        // getGender : function(){
        //     return this.stats.gender;
        // },
        //
        // setCareer : function(career){
        //     this.stats.career = career;
        // },
        //
        // getCareer : function(){
        //     return this.stats.career;
        // }


    }

});