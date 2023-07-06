import java.util.*;
public class Remove_duplicate_from_string {
    public static String remove(String s){
        StringBuilder sb=new StringBuilder("");
        HashSet<Character>hs=new HashSet<>();
        for(int i=0;i<s.length();i++){
            hs.add(s.charAt(i));
        }
        sb.append(hs);
        return sb.toString();
        
    }
    public static void main(String[] args) {
        String s="aabbccdef";
        System.out.print(remove(s));
        
    }
}
