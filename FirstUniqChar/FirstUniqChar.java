import org.junit.Test;

import java.util.*;

public class FirstUniqChar {


    @Test
    public void test(){
//        String s = "leetcode";
//        String s = "loveleetcode";
//        String s = "cc";
        String s = "aadadaad";
        System.out.println(firstUniqChar(s));
    }


//    有问题
//    public char firstUniqChar(String s) {
//        if(s.length() == 0){
//            return ' ';
//        }
//        if (s.length() == 1){
//            return s.toCharArray()[0];
//        }
//        char[] chars = s.toCharArray();
//        List<Character> characterList = new ArrayList<>();
//        for(char item : chars){
//            characterList.add(item);
//        }
//        List<Character> tempList = new ArrayList<>();
//        for(int i = 0 ; i < chars.length ; i++){
//            char check = chars[i];
//            tempList = characterList.subList(i + 1 , characterList.size());
//            if(!tempList.contains(check) && tempList.size() != 0){
//                return check;
//            }
//        }
//        return ' ';
//    }


    /**
     * 第一种解法
     */
    public char firstUniqChar(String s) {
        if(s.length() == 0){
            return ' ';
        }
        char[] chars = s.toCharArray();
        for(char item : chars){
            if(s.indexOf(item) == s.lastIndexOf(item)){
                return item;
            }
        }
        return ' ';
    }

    /**
     * 第二种解法
     */

    public char firstUniqChar2(String s) {
        if(s.length() == 0){
            return ' ';
        }
        char[] chars = s.toCharArray();
        char result = ' ';
        return findFirstChar(result , chars);
    }


    public char findFirstChar(char result , char[] chars){
        if (chars.length == 0){
            return result;
        }
        char begin = chars[0];
        boolean checkFlag = false;
        for(int i = 1 ; i < chars.length ; i++){
            char check = chars[i];
            if(begin == check){
                checkFlag = true;
                break;
            }
        }

        if(!checkFlag){
            result = begin;
            return result;
        }
        chars = removeSameChar(begin , chars);
        return findFirstChar(result , chars);
    }

    public char[] removeSameChar(char target , char[] chars){
        List<Character> list = new ArrayList<>();
        for(char item : chars){
            if(item != target){
                list.add(item);
            }
        }
        char[] tempChar = new char[list.size()];
        for(int i = 0 ; i < list.size() ; i++){
            tempChar[i] = list.get(i);
        }
        return tempChar;
    }
}
