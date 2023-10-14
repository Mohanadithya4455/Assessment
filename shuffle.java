//Program to create an array and shuffle it


import java.util.*;
public class Main
{
	public static void main(String[] args) {
		Integer arr[]={1,2,3,4,5,6,7};
		List<Integer> list=new ArrayList<>(Arrays.asList(arr));
		Collections.shuffle(list);
		System.out.println(list);
	}
}
