class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        List<Integer> h1 = new ArrayList<>();
        for(int i = 0;i<words.length;i++){
            if(words[i].contains(String.valueOf(x))){
                h1.add(i);
            }
        }
        return h1;
    }
}