

let RandomNumber = {
  template: `<div> 
              <p >Nombre aléatoire  entre {{ min }} et {{ max }} : {{RandomNumber}}</p>
              <button @click="getRandomNumber">Générer</button>
            </div>`,
  data: function() {
    return {
      RandomNumber: undefined
    }
  },
  props: ['min', 'max'],
  methods:{
    getRandomNumber: function(event){
      console.log(this.max, this.min)
      min = Math.ceil(this.min)
      max = Math.floor(this.max)
      this.RandomNumber = Math.floor(Math.random() * (max - min +1)) + min
    }
  }
};

let vm = new Vue({   
  el: '#app',         
  data: {            
    prenom: 'romain',
    nom: 'pommier',
    today:'',
    options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' },
    birthdayYear: 1993,
    story:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae officiis! Quae veritatis quibusdam beatae temporibus et, delectus aspernatur? Natus ratione, voluptate quidem fugiat obcaecati corporis quod minima ipsam officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae officiis! Quae veritatis quibusdam beatae temporibus et, delectus aspernatur? Natus ratione, voluptate quidem fugiat obcaecati corporis quod minima ipsam officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae officiis! Quae veritatis quibusdam beatae temporibus et, delectus aspernatur? Natus ratione, voluptate quidem fugiat obcaecati corporis quod minima ipsam officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, recusandae officiis! Quae veritatis quibusdam beatae temporibus et, delectus aspernatur? Natus ratione, voluptate quidem fugiat obcaecati corporis quod minima ipsam offiuod minima ipsam officiis.',
    showStory: false,
    voyages: ['Afghanistan.', 'Afrique du Sud.', 'Albanie.', 'Algérie.', 'Allemagne.', 'Andorre.', 'Angola.','Antigua-et-Barbuda.'],
    time: '',
    userName: '',
    newVoyage:'',
    prixSansTva:0,
    prixAvecTva:0,
    quantite:undefined,
    prix:undefined,
    tauxTva:["0%","5%","10%","15%"],
    tauxUse:1,
  }, 
  created: function() { 
    const date =  new Date();
    
    this.today = date.toLocaleDateString('fr', this.options)
    
    setInterval(()=>{
      let date = new Date();
      this.time = date.toLocaleTimeString('fr', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    })
    
    

  },
  updated: function(){
      console.log('modifier')
  },
  computed: {
      nomComplet: function(){
          return this.prenom.charAt(0).toUpperCase() + this.prenom.slice(1)+' '+this.nom.toUpperCase()
      },
      birthday: function(){
          const currentYear = new Date()
          const age = currentYear.getFullYear() - this.birthdayYear
        
          return age
      },
     
  },
  filters:{
    excerpt: function(value){
      let textResult = ''
      let showMore = '  .....'
      if(value.length > 30){
        for(i = 0; i <= 30; i++){
          textResult += value[i]
        }
        return textResult+ showMore
      }
      else{
        return value
      }  
    }
  },
  methods:{
    showMore: function(event){
      if (event) {
        this.showStory = !this.showStory
      }
    },
    addVoyage: function(){
      this.voyages.push(this.newVoyage)
    },
    tvaPrice: function(){
      if(this.prix > 0 && this.quantite > 0){
        let tauxFloat = parseInt(this.tauxUse)/100+1
        this.prixAvecTva = this.prix*this.quantite*tauxFloat
      }
      else{
        alert("vous ne pouvez entrer des nombre négatif")
        this.prixAvecTva = 0
      }
      
    },
    noTvaPrice: function(){
      if(this.prix > 0 &&  this.quantite > 0){
        this.prixSansTva = this.prix*this.quantite
      }
      else{
        alert("vous ne pouvez entrer des nombre négatif")
        this.prixSansTva = 0
      }
    
    }
    
  },
  components: {
    'random-number': RandomNumber
  }
  
  
});