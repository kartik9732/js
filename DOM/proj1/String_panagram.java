import java.util.*;
public class String_panagram {
    public  static boolean ispanagram(String str){
        //base case
        if(str.length()<26){
            return false;
        } else

        for(char ch='a';ch<='z';ch++){
            if(str.indexOf(ch)<0){
                return false;
            }   //per cahrecter checj mor than 0 mean at least 1 is present
            
        }
        return true;

    }
    
    public static void main(String[] args) {
       // String str="pack my box with five dozen liquor jugs";
        String str="hello world";
        System.out.println(ispanagram(str));
    }
    
}
