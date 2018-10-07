Init -> kickoff {
    Using challenges, Save {
        answers: "[]",
        start_time: "Date.now()",
        challenges: "{}"
    };
};

Node kickoff -> quickreplies {
    Say {
        "What will the following code output?",
		"import java.util.*; \n\npublic class VLA2 implements Comparator<VLA2> { \n    int dishSize; \n\n    public static void main(String[] args) { \n        VLA2[] va = {new VLA2(40), new VLA2(200), new VLA2(60)}; \n        Arrays.sort(va, va[0]); \n        int index = Arrays.binarySearch(va, new VLA2(40), va[0]); \n        System.out.print(index + \" \"); \n        index = Arrays.binarySearch(va, new VLA2(80), va[0]); \n        System.out.print(index); \n    } \n    \n    public int compare(VLA2 a, VLA2 b) { \n        return b.dishSize - a.dishSize;\n    }\n    \n    VLA2(int d) { dishSize = d; } \n}"
    };
};

Choices quickreplies -> moveOn {
    Allow 2;
    Choice opt1 as "0 -2" -> givehint;
    Choice opt2 as "0 -3" -> givehint;
    Choice opt3 as "2 -1" -> givehint;
    Choice opt4 as "2 - 2" -> correct;
    Choice comp_error  as "Compilation Error" -> givehint;
    Choice run_error as "An exeception is thrown at runtime" -> givehint;
};

Hints givehint for quickreplies {
    opt3 "That's incorrect, but you're almost there. Let me give you a small hint. :) Binary search returns -(insertion point) – 1) when element is not in the array. The insertion point is defined as the point at which the key would be inserted into the array. Would you like to give it another shot now?";
    com_error "Hmm, actually the code compiles correctly. Let's think: what will the output be?";
    * "That's incorrect, please try again :)";
};

Node moveOn -> end {
    Say "Okay.";
};

End -> end {
    Using challenges, temp, answers, start_time, hints_asked, Save {
        challenges: "",
        end_time: "Date.now()"
    };
};

