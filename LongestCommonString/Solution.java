import org.junit.Test;

import java.util.*;

public class Solution {

    @Test
    public void test() {
        String text1 = "pzupkr";
        String text2 = "ubmrapg";

//        String text1 = "abcde";
//        String text2 = "ace";

//        String text1 = "abcba";
//        String text2 = "abcbcba";

        System.out.println(LongestContinuousCommonString(text1 , text2));
    }
//    public int longestCommonSubsequence(String text1, String text2) {
//
//        if(text1.equals(text2)){
//            return text1.length();
//        }
//
//        //目标组(短的作为截取组)
//        String target = text1.length() >= text2.length() ? text2 : text1;
//
//        //对比组(长的作为对比组)
//        String compare = text1.length() >= text2.length() ? text1 : text2;
//
//        char[] targetChars = target.toCharArray();
//
//        int count = 0;
//        int index = -1;
//        int tempIndex = 0;
//        char[] finalChar = new char[targetChars.length];
//        for(int i = 0 ; i < targetChars.length ; i++){
//            //对应字符第一次出现的位置
//            index = compare.indexOf(targetChars[i]);
//            if(index != -1){
//                if(index < tempIndex){
//                    int findIndex = getStringTargetIndex(tempIndex , compare , targetChars[i]);
//                    if(findIndex == -1){
//                        continue;
//                    }else{
//                        tempIndex = findIndex;
//                    }
//                }else{
//                    tempIndex = index;
//                }
//                count++;
//                if(index + 1 > compare.length()){
//                    break;
//                }
//                //字符串截取
////                compare = compare.substring(index + 1 , compare.length());
//
//            }else{
//                continue;
//            }
//        }
//        return count;
//    }
//
//    /**
//     * 获取对应下标后出现的第一个索引
//     */
//    public int getStringTargetIndex(int tar , String text , char aim){
//        int index = text.indexOf(aim);
//        if(tar < index){
//            return index;
//        }else{
//            if(tar + 1 <= text.length()){
//               index = getStringTargetIndex(tar , text.substring(tar + 1 , text.length()) , aim);
//            }
//        }
//        return index;
//    }



    public int LongestContinuousCommonString(String text1, String text2) {

        if(text1.equals(text2)){
            return text1.length();
        }

        //目标组(短的作为截取组)
        String target = text1.length() >= text2.length() ? text2 : text1;

        //对比组(长的作为对比组)
        String compare = text1.length() >= text2.length() ? text1 : text2;

        char[] targetChars = target.toCharArray();

        int count = 0;


        //记录下标位置的集合
        Map<Character , Set<Integer>> charIndexMapSet = new HashMap<>();

//        for(int i = 0 ; i < targetChars.length ; i++){
//            Set<Integer> indexSet = new TreeSet<>();
//            getStringTargetIndex(compare , targetChars[i] , indexSet);
//            charIndexMapSet.put(targetChars[i] , indexSet);
//        }
//
//
//        int begin = 0;
//        int tempCount = 0;
//        for(int i = 0 ; i < targetChars.length ; i++){
//            Set<Integer> temp = charIndexMapSet.get(targetChars[i]);
//            if(temp.size() == 0){
//                continue;
//            }else{
//                for(Integer index : temp){
//                    if (index > begin){
//                        begin = index;
//                        tempCount++;
//                        count = tempCount;
//                    }else{
//                        if(tempCount > count){
//                            count = tempCount;
//                        }
//                        tempCount = 0;
//                        tempCount++;
//                        begin = index;
//                    }
//                }
//            }
//        }



        //初始化
        char[] finalChar = new char[targetChars.length];
        for(int i = 0 ; i < finalChar.length ; i++){
            finalChar[i] = '0';
        }


        //根据下标填充
        for(int i = 0 ; i < targetChars.length ; i++){
            Set<Integer> temp = charIndexMapSet.get(targetChars[i]);
            if(temp.size() == 0){
                continue;
            }else{
                for(Integer index : temp){
                    finalChar[index] = targetChars[i];
                }
            }
        }

        //计算连续长度,连续最长
        int tmpCount = 0;
        for(int i = 0 ; i < finalChar.length ; i++){
            if(finalChar[i] != '0'){
                tmpCount++;
            }else{
                if(tmpCount > count){
                    count = tmpCount;
                }
                tmpCount = 0;
            }
        }

        return count;
    }

    /**
     * 获取对应下标后出现的第一个索引
     */
    public void getStringTargetIndex(String text , char aim , Set<Integer> indexSet){
        int index = text.indexOf(aim);
        if(index == -1){
            return;
        }else{
            indexSet.add(index);
            if(index + 1 <= text.length()){
                getStringTargetIndex(text.substring(index + 1 , text.length()) , aim , indexSet);
            }
        }
    }
}