import java.util.*;
public class Minimum_indexed_character_in_strings {
    public static char check(String str1,String str2){
        HashSet<Character>st=new HashSet<>();
        
        
        for(int i=0;i<str2.length();i++){
           
            st.add(str2.charAt(i));
        }
        char minChar=0;
        int minIndex=Integer.MAX_VALUE;
        
        for(int i=0;i<str1.length();i++){
            char ch=str1.charAt(i);
            if(st.contains(ch)){//check
           /*/ int index=str2.indexOf(str2.charAt(i));
            if(index <minIndex){
                minChar=str2.charAt(i);
                minIndex=index;*/
                return ch;
            }

              
        }
    
        return '0';
    
      
    }
    public static void main(String[] args) {
        String str1="hellokaretik";
        String str2="eat";
        System.out.println(check(str1,str2));
    }
}
