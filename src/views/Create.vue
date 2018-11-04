<template>
  <div class="home">
    <div class="dialog">
      <div class="dialog-header">
        <div class="tab" :class="(step===1) ? 'active': ''">
          Describe your dream
        </div>
        <div class="tab" :class="(step===2) ? 'active': ''">
          Enter dream info
        </div>
        <div class="tab" :class="(step===3) ? 'active': ''">
          Share
        </div>
      </div>
    <div class="dialog-content" v-if='step===1'>
    <b-form-textarea 
                     v-model="description"
                     placeholder="Enter dream describing"
                     :rows="4"
                     :max-rows="6">
    </b-form-textarea>
    </div>
    <div class="dialog-content" v-if='step===2'>
      <label>
        When do you want it?
        <b-form-select v-model="when" :options="whenOptions" class="mb-3" />
      </label>
      <label>
        How strong do you want it?
        <b-form-input type="number" v-model="volume"
        placeholder="Enter value from 1 to 10" min="1" max="10"></b-form-input>
      </label>

    </div>
    <div class="dialog-content" v-if='step===3'>
     <b-form-group label="Whant to share with others?">
      <b-form-radio-group v-model="share"
                          :options="shareOptions"
                          stacked>
      </b-form-radio-group>
    </b-form-group>

    </div>
    <div class="button-holder">
     <b-button variant="primary" @click="step -= 1" v-if="step>1">
        <font-awesome-icon icon="arrow-left" />
       Prev
     </b-button>
     <div></div>
     <b-button variant="primary" @click="step += 1" v-if="step<3">
       Next
        <font-awesome-icon icon="arrow-right" />
     </b-button>
     <b-button variant="primary" @click="saveDream" v-else>
       Complete
        <font-awesome-icon icon="check" />
     </b-button>
    </div>

    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
export default {
  name: 'home',
  data(){
    return{
      step: 1,
      description: '',
      when: 'tomorrow',
      whenOptions:
      [
        { value: "tomorrow", text: 'Tomorrow' },
        { value: "afterweek", text: 'After a week' },
        { value: "aftermonth", text: 'After a month' },
        { value: "afteryear", text: 'After a year' },
      ],
      share: 'no',
      shareOptions: [
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
        
      ],
      volume: 5,
      
    }
  },
methods: {
  ...mapActions(['actionSaveDream']),
saveDream(){
  const dream={
    description: this.description,
    when: this.when,
    volume: this.volume,
    share: this.share

  };
  this.actionSaveDream(dream).then(() => {
     this.$router.push({name:'list'});
  } );
 
 
}
}
}
</script>
<style lang="scss" scoped>

$dlg-colour:rgb(164, 126, 240);
$bord-radius: 9px;
.home {
  background:rgba($color: #ffffff, $alpha: 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.dialog {
background-color: $dlg-colour;
width: 750px;
height: 350px;
border-radius: $bord-radius;
box-shadow: 0 0 15px darken($dlg-colour, $amount: 75%);
display: flex;
flex-direction: column;

.dialog-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  
  .tab {
    &:not(.active){
      background-color: darken($dlg-colour, $amount: 5);
      color: rgb(209, 214, 240);
     
    } 
    &:last-of-type{
        border-top-right-radius: $bord-radius;
      }
    &:first-of-type{
      border-top-left-radius: $bord-radius;
     }
   width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  }

.dialog-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  

}
.button-holder {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}


}


</style>
