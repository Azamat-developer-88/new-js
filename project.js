function my_levenshtein(s1, s2) {
	if(s1.length == 0 || s2.length == 0){
	    return 0;
    }else if(s1.length != s2.length){
         return -1;
    }else{
        value = 0;
        for(i=0;i<s1.length;i++){
            if(s1[i]!=s2[i]){
                value ++;
            }
        }
        
        return value;
    }
}