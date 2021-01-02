class HashSet{
    set = []
   add(key){
      this.set[key] = true
   }
   constains(key){
     return this.set[key]
   }
   remove(key){
       this.set[key] = false
   }
  
}