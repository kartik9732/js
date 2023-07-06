import java.util.*;
public class Count {
    public static int CountWords(String str){
        
        int count=0;
        for(int i=0;i<str.length();i++){
            while((str.charAt(i)==' ') && (str.charAt(i+1)!=' ')){
                
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        String str="Codequotient get better at coding";
        CountWords(str);
    }
}
