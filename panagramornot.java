//program to check whether a string is pangram or not
import java.util.*;
public class Main
{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String s=sc.nextLine();
	    System.out.println(f(s));
		
	}
	public static boolean f(String s){
	    String str=s.toLowerCase();
	    int arr[]=new int[26];
	    for(char c:str.toCharArray()){
	        arr[c-'a']++;
	    }
	    for(int i=0;i<arr.length;i++){
	        if(arr[i]==0){
	            return false;
	        }
	    }
	    return true;
	}
}
