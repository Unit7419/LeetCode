import org.junit.Test;

import java.util.*;

public class LetterCombinations {


    @Test
    public void test(){
        String digits = "23";
        System.out.println(letterCombinations(digits));
    }


    public List<String> letterCombinations(String digits) {
        List<String> stringList = new ArrayList<>();
        Map<String , List<String>> keyWordMap = initKeyWord();

        List<String> keys = stringsToStringList(digits);
        List<String> wordList = new ArrayList<>(4);
        for(int i = 0 ; i < keys.size() ; i++){
            List<String> tempList = new ArrayList<>();
            wordList = keyWordMap.get(keys.get(i));
            findItem(stringList , tempList , wordList);
        }

        return stringList;
    }

    public Map<String , List<String>> initKeyWord(){
        Map<String , List<String>> map = new HashMap(8);
        map.put("2" , stringsToStringList("abc"));
        map.put("3" , stringsToStringList("def"));
        map.put("4" , stringsToStringList("ghi"));
        map.put("5" , stringsToStringList("jkl"));
        map.put("6" , stringsToStringList("mno"));
        map.put("7" , stringsToStringList("pqrs"));
        map.put("8" , stringsToStringList("tuv"));
        map.put("9" , stringsToStringList("wxyz"));
        return map;
    }

    public List<String> stringsToStringList(String string){
        List<String> stringList = new ArrayList<>(string.length());
        char[] chars = string.toCharArray();
        for(char item : chars){
            stringList.add(String.valueOf(item));
        }
        return stringList;
    }


    public void findItem(List<String> stringList , List<String> tempList , List<String> wordList){
        if(stringList.size() == 0){
            for(String item : wordList){
                stringList.add(item);
            }
        }else{
            for(String item : stringList){
                for(String wordItem : wordList){
                    tempList.add(item + wordItem);
                }
            }
            stringList.clear();
            stringList.addAll(tempList);
        }
    }
}
