import org.junit.Test;

import java.util.*;

public class Intersection {


    @Test
    public void test(){
//        int[] nums1 = new int[]{4,9,5};
//        int[] nums2 = new int[]{9,4,9,8,4};
        int[] nums1 = new int[]{1,2,2,1};
        int[] nums2 = new int[]{2,2};
        for(int item : intersection(nums1 , nums2)){
            System.out.println(item);
        }

    }

    public int[] intersection(int[] nums1, int[] nums2) {

        if (nums1.length == 0 || nums2.length == 0){
            return new int[]{};
        }

        Set<Integer> listSet = new HashSet<>(nums1.length >= nums2.length ? nums1.length : nums2.length);

        int[] targetArray = nums1.length >= nums2.length ? nums2 : nums1;

        int[] checkArray = nums1.length >= nums2.length ? nums1 : nums2;

        HashSet<Integer> set = new HashSet<>();
        for(int item : targetArray){
            set.add(item);
        }

        for(int item : checkArray){
            if(set.contains(item)){
                listSet.add(item);
            }
        }

        if (listSet.size() == 0){
            return new int[]{};
        }

        int[] result = new int[listSet.size()];

        Iterator<Integer> iterator = listSet.iterator();
        int i = 0;
        while(iterator.hasNext()){
            result[i] = iterator.next();
            i++;
        }

        return result;
    }
}
