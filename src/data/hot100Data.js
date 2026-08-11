// LeetCode Hot 100 Complete Memorization Dataset (100 Problems - Exact User List)

export const HOT_100_PROBLEMS = [
  {
    "id": 31,
    "title": "下一个排列",
    "englishTitle": "Next Permutation",
    "difficulty": "中等",
    "category": "数组",
    "description": "整数数组的 下一个排列 是指其整数按字典序排列的下一个更大排列。请原地修改数组。",
    "intuition": "【从右找升序对 + 交换反转】从后向前找首个 nums[i] < nums[i+1]；再从后向前找首个 nums[j] > nums[i] 交换，最后反转 i+1 到末尾。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void nextPermutation(int[] nums) {\n    int i = nums.length - 2;\n    while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n    if (i >= 0) {\n        int j = nums.length - 1;\n        while (j >= 0 && nums[j] <= nums[i]) j--;\n        swap(nums, i, j);\n    }\n    reverse(nums, i + 1, nums.length - 1);\n}\nprivate void swap(int[] nums, int i, int j) {\n    int t = nums[i]; nums[i] = nums[j]; nums[j] = t;\n}\nprivate void reverse(int[] nums, int l, int r) {\n    while (l < r) swap(nums, l++, r--);\n}",
      "python": "def nextPermutation(nums: List[int]) -> None:\n    i = len(nums) - 2\n    while i >= 0 and nums[i] >= nums[i + 1]: i -= 1\n    if i >= 0:\n        j = len(nums) - 1\n        while j >= 0 and nums[j] <= nums[i]: j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    nums[i + 1:] = reversed(nums[i + 1:])"
    }
  },
  {
    "id": 48,
    "title": "旋转图像",
    "englishTitle": "Rotate Image",
    "difficulty": "中等",
    "category": "数组",
    "description": "给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。必须在 原地 旋转。",
    "intuition": "【主对角线转置 + 左右镜像】顺时针 90 度 = 先按主对角线 `matrix[i][j] <-> matrix[j][i]` 转置，再将每行左右翻转。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[][] matrix) {\n    int n = matrix.length;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            int t = matrix[i][j]; matrix[i][j] = matrix[j][i]; matrix[j][i] = t;\n        }\n    }\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n / 2; j++) {\n            int t = matrix[i][j]; matrix[i][j] = matrix[i][n - 1 - j]; matrix[i][n - 1 - j] = t;\n        }\n    }\n}",
      "python": "def rotate(matrix: List[List[int]]) -> None:\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for i in range(n):\n        matrix[i].reverse()"
    }
  },
  {
    "id": 169,
    "title": "多数元素",
    "englishTitle": "Majority Element",
    "difficulty": "简单",
    "category": "数组",
    "description": "给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。",
    "intuition": "【摩尔投票法 Boyer-Moore】维护 candidate 和 count。遇相同 `count++`，不同 `count--`；`count == 0` 时更换 candidate。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int majorityElement(int[] nums) {\n    int candidate = 0, count = 0;\n    for (int num : nums) {\n        if (count == 0) candidate = num;\n        count += (num == candidate) ? 1 : -1;\n    }\n    return candidate;\n}",
      "python": "def majorityElement(nums: List[int]) -> int:\n    candidate = count = 0\n    for num in nums:\n        if count == 0: candidate = num\n        count += 1 if num == candidate else -1\n    return candidate"
    }
  },
  {
    "id": 215,
    "title": "数组中的第K个最大元素",
    "englishTitle": "Kth Largest Element in an Array",
    "difficulty": "中等",
    "category": "数组",
    "description": "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。",
    "intuition": "【大小为 K 的小顶堆 / 快速选择】维护大小为 k 的小顶堆 PriorityQueue，遍历数组保留最大的 k 个数，堆顶即为第 k 大。",
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\n    for (int num : nums) {\n        pq.offer(num);\n        if (pq.size() > k) pq.poll();\n    }\n    return pq.peek();\n}",
      "python": "def findKthLargest(nums: List[int], k: int) -> int:\n    import heapq\n    return heapq.nlargest(k, nums)[-1]"
    }
  },
  {
    "id": 238,
    "title": "除自身以外数组的乘积",
    "englishTitle": "Product of Array Except Self",
    "difficulty": "中等",
    "category": "数组",
    "description": "给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。不能使用除法。",
    "intuition": "【前缀积 * 后缀积】先遍历一次存储 i 左侧所有元素的乘积，再从右向左遍历用变量 right 维护右侧乘积进行乘积累加。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    res[0] = 1;\n    for (int i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];\n    int right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= right;\n        right *= nums[i];\n    }\n    return res;\n}",
      "python": "def productExceptSelf(nums: List[int]) -> List[int]:\n    n = len(nums)\n    res = [1] * n\n    for i in range(1, n): res[i] = res[i - 1] * nums[i - 1]\n    right = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= right\n        right *= nums[i]\n    return res"
    }
  },
  {
    "id": 448,
    "title": "找到所有数组中消失的数字",
    "englishTitle": "Find All Numbers Disappeared in an Array",
    "difficulty": "简单",
    "category": "数组",
    "description": "给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请找出所有在 [1, n] 范围内但没有在 nums 中出现的数字。",
    "intuition": "【原地取负标记】遍历元素 x = |nums[i]|，将索引 `x - 1` 处的数值变为负数 `nums[x-1] = -|nums[x-1]|`。最后正数对应的索引 + 1 即为消失的数字。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public List<Integer> findDisappearedNumbers(int[] nums) {\n    for (int num : nums) {\n        int idx = Math.abs(num) - 1;\n        if (nums[idx] > 0) nums[idx] = -nums[idx];\n    }\n    List<Integer> res = new ArrayList<>();\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] > 0) res.add(i + 1);\n    }\n    return res;\n}",
      "python": "def findDisappearedNumbers(nums: List[int]) -> List[int]:\n    for num in nums:\n        idx = abs(num) - 1\n        if nums[idx] > 0: nums[idx] = -nums[idx]\n    return [i + 1 for i, v in enumerate(nums) if v > 0]"
    }
  },
  {
    "id": 189,
    "title": "轮转数组",
    "englishTitle": "Rotate Array",
    "difficulty": "中等",
    "category": "数组",
    "description": "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",
    "intuition": "【三次反转法】整体反转数组，再分别反转前 k 个元素和后 n-k 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[] nums, int k) {\n    k %= nums.length;\n    reverse(nums, 0, nums.length - 1);\n    reverse(nums, 0, k - 1);\n    reverse(nums, k, nums.length - 1);\n}\nprivate void reverse(int[] nums, int start, int end) {\n    while (start < end) {\n        int temp = nums[start]; nums[start] = nums[end]; nums[end] = temp;\n        start++; end--;\n    }\n}",
      "python": "def rotate(nums: List[int], k: int) -> None:\n    k %= len(nums)\n    nums.reverse()\n    nums[:k] = reversed(nums[:k])\n    nums[k:] = reversed(nums[k:])"
    }
  },
  {
    "id": 338,
    "title": "比特位计数",
    "englishTitle": "Counting Bits",
    "difficulty": "简单",
    "category": "位运算",
    "description": "给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。",
    "intuition": "【动态规划 + 最低有效位】`bits[i] = bits[i >> 1] + (i & 1)`。一个数二进制 1 的个数等于其右移一位的个数加上最低位是否为 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] countBits(int n) {\n    int[] bits = new int[n + 1];\n    for (int i = 1; i <= n; i++) bits[i] = bits[i >> 1] + (i & 1);\n    return bits;\n}",
      "python": "def countBits(n: int) -> List[int]:\n    bits = [0] * (n + 1)\n    for i in range(1, n + 1): bits[i] = bits[i >> 1] + (i & 1)\n    return bits"
    }
  },
  {
    "id": 136,
    "title": "只出现一次的数字",
    "englishTitle": "Single Number",
    "difficulty": "简单",
    "category": "位运算",
    "description": "给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。",
    "intuition": "【异或 XOR 性质】a ^ a = 0, a ^ 0 = a。遍历对所有数字异或，成对的消除为 0，剩下的即为目标数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int singleNumber(int[] nums) {\n    int ans = 0;\n    for (int num : nums) ans ^= num;\n    return ans;\n}",
      "python": "def singleNumber(nums: List[int]) -> int:\n    ans = 0\n    for num in nums: ans ^= num\n    return ans"
    }
  },
  {
    "id": 461,
    "title": "汉明距离",
    "englishTitle": "Hamming Distance",
    "difficulty": "简单",
    "category": "位运算",
    "description": "两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。给你两个整数 x 和 y，计算并返回它们之间的汉明距离。",
    "intuition": "【异或 + 消除最低位的 1】`xor = x ^ y`。利用 `xor &= (xor - 1)` 快速统计 1 的个数。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int hammingDistance(int x, int y) {\n    int xor = x ^ y, dist = 0;\n    while (xor != 0) { dist++; xor &= (xor - 1); }\n    return dist;\n}",
      "python": "def hammingDistance(x: int, y: int) -> int:\n    xor, dist = x ^ y, 0\n    while xor: dist += 1; xor &= (xor - 1)\n    return dist"
    }
  },
  {
    "id": 4,
    "title": "寻找两个正序数组的中位数",
    "englishTitle": "Median of Two Sorted Arrays",
    "difficulty": "困难",
    "category": "二分查找",
    "description": "给定两个大小分别为 m 和 n 的正序数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。要求 O(log (m+n))。",
    "intuition": "【二分划分分割线】对较短数组进行二分寻找分割线 i，使得左侧所有元素 <= 右侧所有元素。比较 `max(L1, L2)` 与 `min(R1, R2)`。",
    "timeComplexity": "O(log min(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    int m = nums1.length, n = nums2.length;\n    int left = 0, right = m;\n    while (left <= right) {\n        int i = (left + right) / 2, j = (m + n + 1) / 2 - i;\n        int maxL1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];\n        int minR1 = (i == m) ? Integer.MAX_VALUE : nums1[i];\n        int maxL2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];\n        int minR2 = (j == n) ? Integer.MAX_VALUE : nums2[j];\n        if (maxL1 <= minR2 && maxL2 <= minR1) {\n            if ((m + n) % 2 == 1) return Math.max(maxL1, maxL2);\n            else return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2.0;\n        } else if (maxL1 > minR2) right = i - 1;\n        else left = i + 1;\n    }\n    return 0.0;\n}",
      "python": "def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:\n    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    left, right = 0, m\n    while left <= right:\n        i = (left + right) // 2\n        j = (m + n + 1) // 2 - i\n        maxL1 = float('-inf') if i == 0 else nums1[i - 1]\n        minR1 = float('inf') if i == m else nums1[i]\n        maxL2 = float('-inf') if j == 0 else nums2[j - 1]\n        minR2 = float('inf') if j == n else nums2[j]\n        if maxL1 <= minR2 and maxL2 <= minR1:\n            if (m + n) % 2 == 1: return max(maxL1, maxL2)\n            else: return (max(maxL1, maxL2) + min(minR1, minR2)) / 2.0\n        elif maxL1 > minR2: right = i - 1\n        else: left = i + 1\n    return 0.0"
    }
  },
  {
    "id": 33,
    "title": "搜索旋转排序数组",
    "englishTitle": "Search in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "整数数组 nums 按升序排列，但在某个下标上进行了旋转。求 target 的下标，不存在返回 -1。",
    "intuition": "【判断哪一侧有序二分】计算 mid，`nums[left..mid]` 和 `nums[mid..right]` 中必然有一侧严格递增。判断 target 是否落在有序区间内。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int search(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[left] <= nums[mid]) {\n            if (nums[left] <= target && target < nums[mid]) right = mid - 1;\n            else left = mid + 1;\n        } else {\n            if (nums[mid] < target && target <= nums[right]) left = mid + 1;\n            else right = mid - 1;\n        }\n    }\n    return -1;\n}",
      "python": "def search(nums: List[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target: return mid\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]: right = mid - 1\n            else: left = mid + 1\n        else:\n            if nums[mid] < target <= nums[right]: left = mid + 1\n            else: right = mid - 1\n    return -1"
    }
  },
  {
    "id": 34,
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "englishTitle": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。找出开始和结束位置。",
    "intuition": "【两次二分】第一次二分寻找首个 >= target 的位置；第二次二分寻找首个 > target 的位置 minus 1。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] searchRange(int[] nums, int target) {\n    int l = searchLower(nums, target);\n    int r = searchLower(nums, target + 1) - 1;\n    if (l <= r && r < nums.length && nums[l] == target) return new int[]{l, r};\n    return new int[]{-1, -1};\n}\nprivate int searchLower(int[] nums, int target) {\n    int left = 0, right = nums.length - 1, ans = nums.length;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] >= target) { ans = mid; right = mid - 1; }\n        else left = mid + 1;\n    }\n    return ans;\n}",
      "python": "def searchRange(nums: List[int], target: int) -> List[int]:\n    def lower(t):\n        l, r, ans = 0, len(nums) - 1, len(nums)\n        while l <= r:\n            m = (l + r) // 2\n            if nums[m] >= t: ans = m; r = m - 1\n            else: l = m + 1\n        return ans\n    l = lower(target)\n    r = lower(target + 1) - 1\n    if l <= r and r < len(nums) and nums[l] == target: return [l, r]\n    return [-1, -1]"
    }
  },
  {
    "id": 240,
    "title": "搜索二维矩阵 II",
    "englishTitle": "Search a 2D Matrix II",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "编写一个高效算法搜索 m x n 矩阵 matrix 中的目标值 target。每行左到右升序，每列上到下升序。",
    "intuition": "【右上角 BST 裁剪】从右上角 (0, n-1) 开始。target < 当前值向左(col--)；target > 当前值向下(row++)。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean searchMatrix(int[][] matrix, int target) {\n    int row = 0, col = matrix[0].length - 1;\n    while (row < matrix.length && col >= 0) {\n        if (matrix[row][col] == target) return true;\n        if (matrix[row][col] > target) col--;\n        else row++;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: List[List[int]], target: int) -> bool:\n    row, col = 0, len(matrix[0]) - 1\n    while row < len(matrix) and col >= 0:\n        if matrix[row][col] == target: return True\n        if matrix[row][col] > target: col -= 1\n        else: row += 1\n    return False"
    }
  },
  {
    "id": 3,
    "title": "无重复字符的最长子串",
    "englishTitle": "Longest Substring Without Repeating Characters",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。",
    "intuition": "【滑动窗口 + Map】右指针扩展窗口并记录字符上次出现索引。若遇到重复字符，左指针跳跃至 map.get(ch) + 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int maxLen = 0, left = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char ch = s.charAt(right);\n        if (map.containsKey(ch)) left = Math.max(left, map.get(ch) + 1);\n        map.put(ch, right);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}",
      "python": "def lengthOfLongestSubstring(s: str) -> int:\n    mp, left, max_len = {}, 0, 0\n    for right, ch in enumerate(s):\n        if ch in mp: left = max(left, mp[ch] + 1)\n        mp[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  {
    "id": 5,
    "title": "最长回文子串",
    "englishTitle": "Longest Palindromic Substring",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给你一个字符串 s，找到 s 中最长的回文子串。",
    "intuition": "【中心扩散双指针】遍历每个字符/字符间隙作为中心，分别向左右双向扩散扩张，找到最长回文半径。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public String longestPalindrome(String s) {\n    if (s == null || s.length() < 1) return \"\";\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        int len1 = expand(s, i, i);\n        int len2 = expand(s, i, i + 1);\n        int len = Math.max(len1, len2);\n        if (len > end - start) {\n            start = i - (len - 1) / 2;\n            end = i + len / 2;\n        }\n    }\n    return s.substring(start, end + 1);\n}\nprivate int expand(String s, int left, int right) {\n    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n        left--; right++;\n    }\n    return right - left - 1;\n}",
      "python": "def longestPalindrome(s: str) -> str:\n    res = \"\"\n    for i in range(len(s)):\n        # 奇数长\n        l, r = i, i\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n        # 偶数长\n        l, r = i, i + 1\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n    return res"
    }
  },
  {
    "id": 11,
    "title": "盛最多水的容器",
    "englishTitle": "Container With Most Water",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给定长度为 n 的整数数组 height。找到两条线，与 x 轴构成的容器可容纳最多的水。",
    "intuition": "【对向双指针 + 贪心】左右指针在两端。面积受限于较短那根柱子，因此每次移动较短的一端。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxArea(int[] height) {\n    int left = 0, right = height.length - 1, max = 0;\n    while (left < right) {\n        int area = Math.min(height[left], height[right]) * (right - left);\n        max = Math.max(max, area);\n        if (height[left] < height[right]) left++; else right--;\n    }\n    return max;\n}",
      "python": "def maxArea(height: List[int]) -> int:\n    l, r, max_w = 0, len(height) - 1, 0\n    while l < r:\n        area = min(height[l], height[r]) * (r - l)\n        max_w = max(max_w, area)\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return max_w"
    }
  },
  {
    "id": 15,
    "title": "三数之和",
    "englishTitle": "3Sum",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给你一个整数数组 nums ，判断是否存在三元组和为 0。返回所有不重复的三元组。",
    "intuition": "【排序 + 固定 i + L/R 双指针】排序后固定 nums[i]，L=i+1, R=n-1 收缩。跳过重复元素去重。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> threeSum(int[] nums) {\n    Arrays.sort(nums);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (nums[i] > 0) break;\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int L = i + 1, R = nums.length - 1;\n        while (L < R) {\n            int sum = nums[i] + nums[L] + nums[R];\n            if (sum == 0) {\n                ans.add(Arrays.asList(nums[i], nums[L], nums[R]));\n                while (L < R && nums[L] == nums[L + 1]) L++;\n                while (L < R && nums[R] == nums[R - 1]) R--;\n                L++; R--;\n            } else if (sum < 0) L++; else R--;\n        }\n    }\n    return ans;\n}",
      "python": "def threeSum(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    ans = []\n    for i in range(len(nums) - 2):\n        if nums[i] > 0: break\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        L, R = i + 1, len(nums) - 1\n        while L < R:\n            s = nums[i] + nums[L] + nums[R]\n            if s == 0:\n                ans.append([nums[i], nums[L], nums[R]])\n                while L < R and nums[L] == nums[L + 1]: L += 1\n                while L < R and nums[R] == nums[R - 1]: R -= 1\n                L += 1; R -= 1\n            elif s < 0: L += 1\n            else: R -= 1\n    return ans"
    }
  },
  {
    "id": 75,
    "title": "颜色分类",
    "englishTitle": "Sort Colors",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给定包含红(0)、白(1)、蓝(2)的数组 nums ，原地排序使得相同颜色相邻。",
    "intuition": "【荷航国旗问题三指针】p0 指向 0 区边界，p2 指向 2 区边界。curr 遇 0 与 p0 换，遇 2 与 p2 换。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void sortColors(int[] nums) {\n    int p0 = 0, curr = 0, p2 = nums.length - 1;\n    while (curr <= p2) {\n        if (nums[curr] == 0) {\n            int t = nums[p0]; nums[p0++] = nums[curr]; nums[curr++] = t;\n        } else if (nums[curr] == 2) {\n            int t = nums[curr]; nums[curr] = nums[p2]; nums[p2--] = t;\n        } else curr++;\n    }\n}",
      "python": "def sortColors(nums: List[int]) -> None:\n    p0, curr, p2 = 0, 0, len(nums) - 1\n    while curr <= p2:\n        if nums[curr] == 0:\n            nums[p0], nums[curr] = nums[curr], nums[p0]\n            p0 += 1; curr += 1\n        elif nums[curr] == 2:\n            nums[curr], nums[p2] = nums[p2], nums[curr]\n            p2 -= 1\n        else: curr += 1"
    }
  },
  {
    "id": 76,
    "title": "最小覆盖子串",
    "englishTitle": "Minimum Window Substring",
    "difficulty": "困难",
    "category": "双指针",
    "description": "给你字符串 s 和 t 。返回 s 中涵盖 t 所有字符的最小子串。",
    "intuition": "【滑动窗口 + 欠帐 Counter】用 Count 数组统计 t 字符频次，变量 need 表示尚缺字符数。右指针进窗口，完成覆盖后收缩左指针。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) need[c]++;\n    int needCount = t.length(), left = 0, minLen = Integer.MAX_VALUE, start = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c] > 0) needCount--;\n        need[c]--;\n        if (needCount == 0) {\n            while (left < right && need[s.charAt(left)] < 0) {\n                need[s.charAt(left)]++; left++;\n            }\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1; start = left;\n            }\n            need[s.charAt(left)]++; needCount++; left++;\n        }\n    }\n    return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n}",
      "python": "def minWindow(s: str, t: str) -> str:\n    need = collections.Counter(t)\n    need_cnt = len(t)\n    left, res = 0, (0, float('inf'))\n    for right, c in enumerate(s):\n        if need[c] > 0: need_cnt -= 1\n        need[c] -= 1\n        if need_cnt == 0:\n            while left < right and need[s[left]] < 0:\n                need[s[left]] += 1; left += 1\n            if right - left + 1 < res[1] - res[0]: res = (left, right + 1)\n            need[s[left]] += 1; need_cnt += 1; left += 1\n    return \"\" if res[1] == float('inf') else s[res[0]:res[1]]"
    }
  },
  {
    "id": 283,
    "title": "移动零",
    "englishTitle": "Move Zeroes",
    "difficulty": "简单",
    "category": "双指针",
    "description": "给定数组 nums，将所有 0 移动到数组末尾，保持非零元素相对顺序。原数组操作。",
    "intuition": "【快慢双指针】slow 指向已就位非零区域边界。fast 遇到非零元素即与 slow 交换并 slow++。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void moveZeroes(int[] nums) {\n    int slow = 0;\n    for (int fast = 0; fast < nums.length; fast++) {\n        if (nums[fast] != 0) {\n            int t = nums[slow]; nums[slow] = nums[fast]; nums[fast] = t;\n            slow++;\n        }\n    }\n}",
      "python": "def moveZeroes(nums: List[int]) -> None:\n    slow = 0\n    for fast in range(len(nums)):\n        if nums[fast] != 0:\n            nums[slow], nums[fast] = nums[fast], nums[slow]\n            slow += 1"
    }
  },
  {
    "id": 287,
    "title": "寻找重复数",
    "englishTitle": "Find the Duplicate Number",
    "difficulty": "中等",
    "category": "双指针",
    "description": "包含 n + 1 个整数的数组 nums，数字都在 [1, n] 范围内。寻找重复的数字。不能修改原数组。",
    "intuition": "【Floyd 判圈算法】视数组下标为链表节点 `next = nums[i]`。快慢指针相遇后，指针从 head 出发同速前进求入环节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findDuplicate(int[] nums) {\n    int slow = nums[0], fast = nums[0];\n    do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow != fast);\n    int p1 = nums[0], p2 = slow;\n    while (p1 != p2) { p1 = nums[p1]; p2 = nums[p2]; }\n    return p1;\n}",
      "python": "def findDuplicate(nums: List[int]) -> int:\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]; fast = nums[nums[fast]]\n        if slow == fast: break\n    p1, p2 = nums[0], slow\n    while p1 != p2: p1 = nums[p1]; p2 = nums[p2]\n    return p1"
    }
  },
  {
    "id": 647,
    "title": "回文子串",
    "englishTitle": "Palindromic Substrings",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。",
    "intuition": "【中心扩散法】分别以单字符 `(i, i)` 和双字符间隙 `(i, i+1)` 为中心向两边扩展，统计所有回文串个数。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int countSubstrings(String s) {\n    int count = 0;\n    for (int i = 0; i < s.length(); i++) {\n        count += expand(s, i, i);\n        count += expand(s, i, i + 1);\n    }\n    return count;\n}\nprivate int expand(String s, int l, int r) {\n    int cnt = 0;\n    while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {\n        cnt++; l--; r++;\n    }\n    return cnt;\n}",
      "python": "def countSubstrings(s: str) -> int:\n    count = 0\n    for i in range(len(s)):\n        # 奇数中心\n        l, r = i, i\n        while l >= 0 and r < len(s) and s[l] == s[r]: count += 1; l -= 1; r += 1\n        # 偶数中心\n        l, r = i, i + 1\n        while l >= 0 and r < len(s) and s[l] == s[r]: count += 1; l -= 1; r += 1\n    return count"
    }
  },
  {
    "id": 2,
    "title": "两数相加",
    "englishTitle": "Add Two Numbers",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你两个非空链表表示两个非负整数。请你将两个数相加，并以相同形式返回一个表示和的链表。",
    "intuition": "【模拟加法 + 进位 carry】遍历 l1 和 l2，计算 sum = x + y + carry，构建节点 `sum % 10` 并进位 `carry = sum / 10`。",
    "timeComplexity": "O(max(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry != 0) {\n        int x = (l1 != null) ? l1.val : 0;\n        int y = (l2 != null) ? l2.val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n        if (l1 != null) l1 = l1.next;\n        if (l2 != null) l2 = l2.next;\n    }\n    return dummy.next;\n}",
      "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    carry = 0\n    while l1 or l2 or carry:\n        x = l1.val if l1 else 0\n        y = l2.val if l2 else 0\n        s = x + y + carry\n        carry = s // 10\n        curr.next = ListNode(s % 10)\n        curr = curr.next\n        l1 = l1.next if l1 else None\n        l2 = l2.next if l2 else None\n    return dummy.next"
    }
  },
  {
    "id": 19,
    "title": "删除链表的倒数第 N 个结点",
    "englishTitle": "Remove Nth Node From End of List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",
    "intuition": "【双指针相差 n 步】fast 先走 n 步。而后 slow 与 fast 同时前进，fast 达末尾时 slow 恰好停在待删除节点的前驱位置。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head), fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) { fast = fast.next; slow = slow.next; }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
      "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    fast = slow = dummy\n    for _ in range(n + 1): fast = fast.next\n    while fast: fast = fast.next; slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next"
    }
  },
  {
    "id": 21,
    "title": "合并两个有序链表",
    "englishTitle": "Merge Two Sorted Lists",
    "difficulty": "简单",
    "category": "链表",
    "description": "将两个升序链表合并为一个新的 升序 链表并返回。",
    "intuition": "【Dummy 节点双指针比较】比较 list1 和 list2 当前节点值，较小者接入 tail.next 并向前推进。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (list1 != null && list2 != null) {\n        if (list1.val <= list2.val) { curr.next = list1; list1 = list1.next; }\n        else { curr.next = list2; list2 = list2.next; }\n        curr = curr.next;\n    }\n    curr.next = (list1 != null) ? list1 : list2;\n    return dummy.next;\n}",
      "python": "def mergeTwoLists(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    while l1 and l2:\n        if l1.val <= l2.val: curr.next, l1 = l1, l1.next\n        else: curr.next, l2 = l2, l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next"
    }
  },
  {
    "id": 23,
    "title": "合并K个升序链表",
    "englishTitle": "Merge k Sorted Lists",
    "difficulty": "困难",
    "category": "链表",
    "description": "给你一个链表数组，每个链表已经按升序排列。将所有链表合并到一个升序链表中。",
    "intuition": "【小顶堆 PriorityQueue】把 k 个链表头节点放入小顶堆。每次弹出最小节点接入结果，并将 `.next` 节点压入堆中。",
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public ListNode mergeKLists(ListNode[] lists) {\n    if (lists == null || lists.length == 0) return null;\n    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));\n    for (ListNode node : lists) if (node != null) pq.add(node);\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (!pq.isEmpty()) {\n        ListNode minNode = pq.poll();\n        curr.next = minNode; curr = curr.next;\n        if (minNode.next != null) pq.add(minNode.next);\n    }\n    return dummy.next;\n}",
      "python": "def mergeKLists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n    import heapq\n    heap = []\n    for i, node in enumerate(lists):\n        if node: heapq.heappush(heap, (node.val, i, node))\n    dummy = curr = ListNode(0)\n    while heap:\n        val, i, node = heapq.heappop(heap)\n        curr.next = node; curr = curr.next\n        if node.next: heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next"
    }
  },
  {
    "id": 141,
    "title": "环形链表",
    "englishTitle": "Linked List Cycle",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个链表的头节点 head ，判断链表中是否有环。",
    "intuition": "【快慢指针】slow 走 1 步，fast 走 2 步。若有环，快指针必在环内追上慢指针 (`slow == fast`)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
      "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next; fast = fast.next.next\n        if slow == fast: return True\n    return False"
    }
  },
  {
    "id": 142,
    "title": "环形链表 II",
    "englishTitle": "Linked List Cycle II",
    "difficulty": "中等",
    "category": "链表",
    "description": "给定链表头节点 head ，返回链表开始入环的第一个节点。若无环返回 null。",
    "intuition": "【相遇点找入环】快慢指针相遇时，使 ptr 从 head 出发与 slow 同速前进，二者相遇处即为入环节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow == fast) {\n            ListNode ptr = head;\n            while (ptr != slow) { ptr = ptr.next; slow = slow.next; }\n            return ptr;\n        }\n    }\n    return null;\n}",
      "python": "def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next; fast = fast.next.next\n        if slow == fast:\n            ptr = head\n            while ptr != slow: ptr = ptr.next; slow = slow.next\n            return ptr\n    return None"
    }
  },
  {
    "id": 146,
    "title": "LRU 缓存",
    "englishTitle": "LRU Cache",
    "difficulty": "中等",
    "category": "链表",
    "description": "设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。",
    "intuition": "【HashMap + 双向链表】HashMap 提供 O(1) 查找；双向链表头部维护最新访问节点，尾部淘汰最久未访问节点。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(Capacity)",
    "codeTemplates": {
      "java": "class LRUCache {\n    class Node { int key, value; Node prev, next; Node(int k, int v) { key = k; value = v; } }\n    private int cap;\n    private Map<Integer, Node> map = new HashMap<>();\n    private Node head = new Node(0, 0), tail = new Node(0, 0);\n    public LRUCache(int capacity) { this.cap = capacity; head.next = tail; tail.prev = head; }\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node n = map.get(key); moveToHead(n); return n.value;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) { Node n = map.get(key); n.value = value; moveToHead(n); }\n        else {\n            if (map.size() >= cap) { Node remove = tail.prev; removeNode(remove); map.remove(remove.key); }\n            Node n = new Node(key, value); map.put(key, n); addToHead(n);\n        }\n    }\n    private void removeNode(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void addToHead(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n    private void moveToHead(Node n) { removeNode(n); addToHead(n); }\n}",
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = collections.OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache: self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap: self.cache.popitem(last=False)"
    }
  },
  {
    "id": 148,
    "title": "排序链表",
    "englishTitle": "Sort List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你链表的头节点 head ，请将其按 升序 排列并返回 排序后的链表。",
    "intuition": "【归并排序 (Merge Sort)】快慢指针找中点切断为两条子链表，分别递归排序，而后合并两个有序链表。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public ListNode sortList(ListNode head) {\n    if (head == null || head.next == null) return head;\n    ListNode slow = head, fast = head.next;\n    while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }\n    ListNode mid = slow.next; slow.next = null;\n    return merge(sortList(head), sortList(mid));\n}\nprivate ListNode merge(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }\n        else { curr.next = l2; l2 = l2.next; }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
      "python": "def sortList(head: Optional[ListNode]) -> Optional[ListNode]:\n    if not head or not head.next: return head\n    slow, fast = head, head.next\n    while fast and fast.next: slow, fast = slow.next, fast.next.next\n    mid, slow.next = slow.next, None\n    left, right = sortList(head), sortList(mid)\n    dummy = curr = ListNode(0)\n    while left and right:\n        if left.val < right.val: curr.next, left = left, left.next\n        else: curr.next, right = right, right.next\n        curr = curr.next\n    curr.next = left or right\n    return dummy.next"
    }
  },
  {
    "id": 160,
    "title": "相交链表",
    "englishTitle": "Intersection of Two Linked Lists",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你两个单链表的头节点 headA 和 headB ，返回两个单链表相交的起始节点。",
    "intuition": "【双指针交替走】pA 走完走 B，pB 走完走 A。两人走过的距离均为 L_A + L_B，必在交点相遇。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    if (headA == null || headB == null) return null;\n    ListNode pA = headA, pB = headB;\n    while (pA != pB) {\n        pA = (pA == null) ? headB : pA.next;\n        pB = (pB == null) ? headA : pB.next;\n    }\n    return pA;\n}",
      "python": "def getIntersectionNode(headA: ListNode, headB: ListNode) -> ListNode:\n    if not headA or not headB: return None\n    pA, pB = headA, headB\n    while pA != pB:\n        pA = headB if pA is None else pA.next\n        pB = headA if pB is None else pB.next\n    return pA"
    }
  },
  {
    "id": 206,
    "title": "反转链表",
    "englishTitle": "Reverse Linked List",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。",
    "intuition": "【双指针迭代】prev=null, curr=head。每次暂存 nextTemp = curr.next，而后 curr.next = prev，整体向前平移。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next; curr.next = prev; prev = curr; curr = next;\n    }\n    return prev;\n}",
      "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next; curr.next = prev; prev, curr = curr, nxt\n    return prev"
    }
  },
  {
    "id": 234,
    "title": "回文链表",
    "englishTitle": "Palindrome Linked List",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。",
    "intuition": "【快慢指针中点 + 反转后半段】快慢指针找中点，反转后半部分链表，左右双指针同时向中间比对。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean isPalindrome(ListNode head) {\n    if (head == null || head.next == null) return true;\n    ListNode slow = head, fast = head;\n    while (fast.next != null && fast.next.next != null) { slow = slow.next; fast = fast.next.next; }\n    ListNode p2 = reverse(slow.next), p1 = head;\n    while (p2 != null) {\n        if (p1.val != p2.val) return false;\n        p1 = p1.next; p2 = p2.next;\n    }\n    return true;\n}\nprivate ListNode reverse(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) { ListNode nxt = curr.next; curr.next = prev; prev = curr; curr = nxt; }\n    return prev;\n}",
      "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    if not head or not head.next: return True\n    slow = fast = head\n    while fast.next and fast.next.next: slow, fast = slow.next, fast.next.next\n    prev, curr = None, slow.next\n    while curr: nxt = curr.next; curr.next = prev; prev, curr = curr, nxt\n    p1, p2 = head, prev\n    while p2:\n        if p1.val != p2.val: return False\n        p1, p2 = p1.next, p2.next\n    return True"
    }
  },
  {
    "id": 20,
    "title": "有效的括号",
    "englishTitle": "Valid Parentheses",
    "difficulty": "简单",
    "category": "栈和队列",
    "description": "给定只包括 '(',')','{','}','[' ']' 的字符串 s ，判断字符串是否有效。",
    "intuition": "【辅助栈 Stack】遇到左括号压入对应右括号；遇右括号时，栈空或弹出不匹配则返回 false。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}",
      "python": "def isValid(s: str) -> bool:\n    stack = []\n    mp = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mp:\n            top = stack.pop() if stack else '#'\n            if mp[char] != top: return False\n        else: stack.append(char)\n    return not stack"
    }
  },
  {
    "id": 155,
    "title": "最小栈",
    "englishTitle": "Min Stack",
    "difficulty": "中等",
    "category": "栈和队列",
    "description": "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。",
    "intuition": "【双栈 / 辅助 minStack】维护主数据栈 dataStack 和辅助 minStack。入栈时压入当前最小值 `min(val, minStack.peek())`。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "class MinStack {\n    private Stack<Integer> stack = new Stack<>(), minStack = new Stack<>();\n    public MinStack() {}\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n        else minStack.push(minStack.peek());\n    }\n    public void pop() { stack.pop(); minStack.pop(); }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
      "python": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]: self.min_stack.append(val)\n        else: self.min_stack.append(self.min_stack[-1])\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return self.min_stack[-1]"
    }
  },
  {
    "id": 394,
    "title": "字符串解码",
    "englishTitle": "Decode String",
    "difficulty": "中等",
    "category": "栈和队列",
    "description": "编码规则为 k[encoded_string]，表示中括号内部的字符串重复 k 次。返回解码后的字符串。",
    "intuition": "【双栈保存 (k, prevStr)】遇 '[' 时把当前 count 与已有字符串 resStr 压栈清空；遇 ']' 时弹出上次字符串与重复次数拼接。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public String decodeString(String s) {\n    Stack<Integer> countStack = new Stack<>();\n    Stack<StringBuilder> stringStack = new Stack<>();\n    StringBuilder curr = new StringBuilder(); int k = 0;\n    for (char c : s.toCharArray()) {\n        if (Character.isDigit(c)) k = k * 10 + (c - '0');\n        else if (c == '[') {\n            countStack.push(k); stringStack.push(curr); curr = new StringBuilder(); k = 0;\n        } else if (c == ']') {\n            StringBuilder prev = stringStack.pop(); int repeat = countStack.pop();\n            for (int i = 0; i < repeat; i++) prev.append(curr);\n            curr = prev;\n        } else curr.append(c);\n    }\n    return curr.toString();\n}",
      "python": "def decodeString(s: str) -> str:\n    count_stack, str_stack, curr, k = [], [], \"\", 0\n    for c in s:\n        if c.isdigit(): k = k * 10 + int(c)\n        elif c == '[':\n            count_stack.append(k); str_stack.append(curr); curr = \"\"; k = 0\n        elif c == ']':\n            prev = str_stack.pop(); repeat = count_stack.pop()\n            curr = prev + curr * repeat\n        else: curr += c\n    return curr"
    }
  },
  {
    "id": 239,
    "title": "滑动窗口最大值",
    "englishTitle": "Sliding Window Maximum",
    "difficulty": "困难",
    "category": "栈和队列",
    "description": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从最左移动到最右。返回滑动窗口中的最大值。",
    "intuition": "【单调双端队列 Deque】存储下标，保持队列对应元素严格单调递减。队头即为当前窗口的最大值下标。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    Deque<Integer> deque = new LinkedList<>();\n    int[] res = new int[nums.length - k + 1];\n    for (int i = 0; i < nums.length; i++) {\n        while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();\n        deque.addLast(i);\n        if (deque.peekFirst() <= i - k) deque.pollFirst();\n        if (i >= k - 1) res[i - k + 1] = nums[deque.peekFirst()];\n    }\n    return res;\n}",
      "python": "def maxSlidingWindow(nums: List[int], k: int) -> List[int]:\n    q, res = collections.deque(), []\n    for i, num in enumerate(nums):\n        while q and nums[q[-1]] <= num: q.pop()\n        q.append(i)\n        if q[0] <= i - k: q.popleft()\n        if i >= k - 1: res.append(nums[q[0]])\n    return res"
    }
  },
  {
    "id": 1,
    "title": "两数之和",
    "englishTitle": "Two Sum",
    "difficulty": "简单",
    "category": "哈希表",
    "description": "给定整数数组 nums 和目标值 target，找出和为 target 的那两个整数，并返回它们的下标。",
    "intuition": "【空间换时间】用 HashMap 记录已遍历的数字及索引。遍历 x 时去 Map 查找是否存在 target - x。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}",
      "python": "def twoSum(nums: List[int], target: int) -> List[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen: return [seen[comp], i]\n        seen[num] = i\n    return []"
    }
  },
  {
    "id": 49,
    "title": "字母异位词分组",
    "englishTitle": "Group Anagrams",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给你一个字符串数组，请你将 字母异位词 组合在一起。",
    "intuition": "【键标准化】字母异位词排序后的字符串必然相同。以排序后的字符串为 Key，同组词列表为 Value。",
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "codeTemplates": {
      "java": "public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String s : strs) {\n        char[] chars = s.toCharArray(); Arrays.sort(chars);\n        String key = new String(chars);\n        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n    }\n    return new ArrayList<>(map.values());\n}",
      "python": "def groupAnagrams(strs: List[str]) -> List[List[str]]:\n    mp = collections.defaultdict(list)\n    for s in strs:\n        key = ''.join(sorted(s))\n        mp[key].append(s)\n    return list(mp.values())"
    }
  },
  {
    "id": 128,
    "title": "最长连续序列",
    "englishTitle": "Longest Consecutive Sequence",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "未排序的整数数组 nums ，找出数字连续的最长序列长度。要求 O(n)。",
    "intuition": "【Set 找序列起点】放入 HashSet。只从序列起点 (x - 1 不存在) 开始向下计数，保证每项仅访问常数次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) set.add(num);\n    int longest = 0;\n    for (int num : set) {\n        if (!set.contains(num - 1)) {\n            int curr = num, streak = 1;\n            while (set.contains(curr + 1)) { curr++; streak++; }\n            longest = Math.max(longest, streak);\n        }\n    }\n    return longest;\n}",
      "python": "def longestConsecutive(nums: List[int]) -> int:\n    num_set, longest = set(nums), 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr, streak = num, 1\n            while curr + 1 in num_set: curr += 1; streak += 1\n            longest = max(longest, streak)\n    return longest"
    }
  },
  {
    "id": 347,
    "title": "前 K 个高频元素",
    "englishTitle": "Top K Frequent Elements",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。",
    "intuition": "【Map 频次统计 + 桶排序】统计词频 Map 后，以频次为数组下标建桶，倒序提取前 k 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int num : nums) map.put(num, map.getOrDefault(num, 0) + 1);\n    List<Integer>[] buckets = new List[nums.length + 1];\n    for (int key : map.keySet()) {\n        int freq = map.get(key);\n        if (buckets[freq] == null) buckets[freq] = new ArrayList<>();\n        buckets[freq].add(key);\n    }\n    int[] res = new int[k]; int idx = 0;\n    for (int i = buckets.length - 1; i >= 0 && idx < k; i--) {\n        if (buckets[i] != null) {\n            for (int num : buckets[i]) { res[idx++] = num; if (idx == k) break; }\n        }\n    }\n    return res;\n}",
      "python": "def topKFrequent(nums: List[int], k: int) -> List[int]:\n    count = collections.Counter(nums)\n    return [item[0] for item in count.most_common(k)]"
    }
  },
  {
    "id": 438,
    "title": "找到字符串中所有字母异位词",
    "englishTitle": "Find All Anagrams in a String",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给定字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回起始索引。",
    "intuition": "【固定长度滑动窗口 + 词频比较】维护长度为 len(p) 的滑动窗口，比较窗口内字符频次与 p 频次数组是否一致。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(26)",
    "codeTemplates": {
      "java": "public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> res = new ArrayList<>();\n    if (s.length() < p.length()) return res;\n    int[] pCount = new int[26], sCount = new int[26];\n    for (int i = 0; i < p.length(); i++) {\n        pCount[p.charAt(i) - 'a']++; sCount[s.charAt(i) - 'a']++;\n    }\n    if (Arrays.equals(pCount, sCount)) res.add(0);\n    for (int i = p.length(); i < s.length(); i++) {\n        sCount[s.charAt(i) - 'a']++; sCount[s.charAt(i - p.length()) - 'a']--;\n        if (Arrays.equals(pCount, sCount)) res.add(i - p.length() + 1);\n    }\n    return res;\n}",
      "python": "def findAnagrams(s: str, p: str) -> List[int]:\n    if len(s) < len(p): return []\n    p_cnt, s_cnt = [0] * 26, [0] * 26\n    for i in range(len(p)):\n        p_cnt[ord(p[i]) - 97] += 1; s_cnt[ord(s[i]) - 97] += 1\n    res = [0] if p_cnt == s_cnt else []\n    for i in range(len(p), len(s)):\n        s_cnt[ord(s[i]) - 97] += 1; s_cnt[ord(s[i - len(p)]) - 97] -= 1\n        if p_cnt == s_cnt: res.append(i - len(p) + 1)\n    return res"
    }
  },
  {
    "id": 560,
    "title": "和为 K 的子数组",
    "englishTitle": "Subarray Sum Equals K",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数。",
    "intuition": "【前缀和 + Map】子数组 [i..j] 和为 preSum[j] - preSum[i-1] = k。遍历 j 时在 Map 查找 preSum[j] - k 的出现次数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>(); map.put(0, 1);\n    int count = 0, sum = 0;\n    for (int num : nums) {\n        sum += num;\n        if (map.containsKey(sum - k)) count += map.get(sum - k);\n        map.put(sum, map.getOrDefault(sum, 0) + 1);\n    }\n    return count;\n}",
      "python": "def subarraySum(nums: List[int], k: int) -> int:\n    mp, cnt, curr = {0: 1}, 0, 0\n    for num in nums:\n        curr += num\n        if curr - k in mp: cnt += mp[curr - k]\n        mp[curr] = mp.get(curr, 0) + 1\n    return cnt"
    }
  },
  {
    "id": 94,
    "title": "二叉树的中序遍历",
    "englishTitle": "Binary Tree Inorder Traversal",
    "difficulty": "简单",
    "category": "树",
    "description": "给定二叉树根节点 root ，返回其 中序 遍历 (左 -> 根 -> 右)。",
    "intuition": "【DFS 递归 / 显式栈】中序遍历顺序为 左子树 -> 当前根节点 -> 右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<Integer> inorderTraversal(TreeNode root) {\n    List<Integer> res = new ArrayList<>(); inorder(root, res); return res;\n}\nprivate void inorder(TreeNode root, List<Integer> res) {\n    if (root == null) return;\n    inorder(root.left, res); res.add(root.val); inorder(root.right, res);\n}",
      "python": "def inorderTraversal(root: Optional[TreeNode]) -> List[int]:\n    res = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left); res.append(node.val); dfs(node.right)\n    dfs(root); return res"
    }
  },
  {
    "id": 96,
    "title": "不同的二叉搜索树",
    "englishTitle": "Unique Binary Search Trees",
    "difficulty": "中等",
    "category": "树",
    "description": "给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 (BST) 有多少种？",
    "intuition": "【卡特兰数 DP】以 i 为根节点时，左子树有 i-1 个节点，右子树有 n-i 个节点。`dp[n] = sum(dp[i-1] * dp[n-i])`。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int numTrees(int n) {\n    int[] dp = new int[n + 1];\n    dp[0] = 1; dp[1] = 1;\n    for (int i = 2; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            dp[i] += dp[j - 1] * dp[i - j];\n        }\n    }\n    return dp[n];\n}",
      "python": "def numTrees(n: int) -> int:\n    dp = [0] * (n + 1)\n    dp[0] = dp[1] = 1\n    for i in range(2, n + 1):\n        for j in range(1, i + 1):\n            dp[i] += dp[j - 1] * dp[i - j]\n    return dp[n]"
    }
  },
  {
    "id": 98,
    "title": "验证二叉搜索树",
    "englishTitle": "Validate Binary Search Tree",
    "difficulty": "中等",
    "category": "树",
    "description": "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。",
    "intuition": "【区间边界 (lower, upper) 传递】递归向下传递允许的值域区间 `validate(node, lower, upper)`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isValidBST(TreeNode root) {\n    return validate(root, null, null);\n}\nprivate boolean validate(TreeNode node, Integer lower, Integer upper) {\n    if (node == null) return true;\n    if (lower != null && node.val <= lower) return false;\n    if (upper != null && node.val >= upper) return false;\n    return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);\n}",
      "python": "def isValidBST(root: Optional[TreeNode]) -> bool:\n    def validate(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if node.val <= low or node.val >= high: return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root)"
    }
  },
  {
    "id": 101,
    "title": "对称二叉树",
    "englishTitle": "Symmetric Tree",
    "difficulty": "简单",
    "category": "树",
    "description": "给你一个二叉树的根节点 root ，检查它是否轴对称。",
    "intuition": "【双指针镜像递归】比较 left.val == right.val 且 isMirror(left.left, right.right) 且 isMirror(left.right, right.left)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isSymmetric(TreeNode root) {\n    return root == null || check(root.left, root.right);\n}\nprivate boolean check(TreeNode p, TreeNode q) {\n    if (p == null && q == null) return true;\n    if (p == null || q == null || p.val != q.val) return false;\n    return check(p.left, q.right) && check(p.right, q.left);\n}",
      "python": "def isSymmetric(root: Optional[TreeNode]) -> bool:\n    def isMirror(p, q):\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return isMirror(p.left, q.right) and isMirror(p.right, q.left)\n    return not root or isMirror(root.left, root.right)"
    }
  },
  {
    "id": 102,
    "title": "二叉树的层序遍历",
    "englishTitle": "Binary Tree Level Order Traversal",
    "difficulty": "中等",
    "category": "树",
    "description": "给你二叉树的根节点 root ，返回其节点值的 层序遍历 。",
    "intuition": "【Queue BFS】维护 Queue，按当前 queue.size() 取出该层所有节点，把值加入列表并将左右子节点压入 Queue。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>(); if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>(); q.offer(root);\n    while (!q.isEmpty()) {\n        int sz = q.size(); List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < sz; i++) {\n            TreeNode n = q.poll(); level.add(n.val);\n            if (n.left != null) q.offer(n.left);\n            if (n.right != null) q.offer(n.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
      "python": "def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:\n    if not root: return []\n    res, q = [], collections.deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            n = q.popleft(); level.append(n.val)\n            if n.left: q.append(n.left)\n            if n.right: q.append(n.right)\n        res.append(level)\n    return res"
    }
  },
  {
    "id": 104,
    "title": "二叉树的最大深度",
    "englishTitle": "Maximum Depth of Binary Tree",
    "difficulty": "简单",
    "category": "树",
    "description": "给定二叉树 root ，返回其最大深度。",
    "intuition": "【树形 DP 递归】最大深度 = max(maxDepth(root.left), maxDepth(root.right)) + 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;\n}",
      "python": "def maxDepth(root: Optional[TreeNode]) -> int:\n    if not root: return 0\n    return max(maxDepth(root.left), maxDepth(root.right)) + 1"
    }
  },
  {
    "id": 105,
    "title": "从前序与中序遍历序列构造二叉树",
    "englishTitle": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "中等",
    "category": "树",
    "description": "给定先序遍历 preorder 和中序遍历 inorder ，构造二叉树。",
    "intuition": "【前序找根 + 中序切分】preorder[0] 为根节点。在中序遍历找到根节点位置，切分为左右子树并递归构建。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Integer, Integer> inMap = new HashMap<>();\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);\n    return helper(preorder, 0, preorder.length - 1, 0);\n}\nprivate TreeNode helper(int[] pre, int pS, int pE, int iS) {\n    if (pS > pE) return null;\n    TreeNode root = new TreeNode(pre[pS]);\n    int inRoot = inMap.get(root.val), leftLen = inRoot - iS;\n    root.left = helper(pre, pS + 1, pS + leftLen, iS);\n    root.right = helper(pre, pS + leftLen + 1, pE, inRoot + 1);\n    return root;\n}",
      "python": "def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n    in_map = {v: i for i, v in enumerate(inorder)}\n    def helper(pS, pE, iS):\n        if pS > pE: return None\n        root_val = preorder[pS]\n        root = TreeNode(root_val)\n        in_root = in_map[root_val]; left_len = in_root - iS\n        root.left = helper(pS + 1, pS + left_len, iS)\n        root.right = helper(pS + left_len + 1, pE, in_root + 1)\n        return root\n    return helper(0, len(preorder) - 1, 0)"
    }
  },
  {
    "id": 114,
    "title": "二叉树展开为链表",
    "englishTitle": "Flatten Binary Tree to Linked List",
    "difficulty": "中等",
    "category": "树",
    "description": "将二叉树展开为一个单链表，right 指向下一个节点，left 为 null。",
    "intuition": "【寻找左子树的最右前驱】若左子树存在，将其最右节点连接到当前节点的右子树，而后将左子树移至右侧。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void flatten(TreeNode root) {\n    TreeNode curr = root;\n    while (curr != null) {\n        if (curr.left != null) {\n            TreeNode pred = curr.left;\n            while (pred.right != null) pred = pred.right;\n            pred.right = curr.right;\n            curr.right = curr.left;\n            curr.left = null;\n        }\n        curr = curr.right;\n    }\n}",
      "python": "def flatten(root: Optional[TreeNode]) -> None:\n    curr = root\n    while curr:\n        if curr.left:\n            pred = curr.left\n            while pred.right: pred = pred.right\n            pred.right = curr.right\n            curr.right = curr.left\n            curr.left = None\n        curr = curr.right"
    }
  },
  {
    "id": 124,
    "title": "二叉树中的最大路径和",
    "englishTitle": "Binary Tree Maximum Path Sum",
    "difficulty": "困难",
    "category": "树",
    "description": "路径被定义为节点序列，求二叉树中的最大路径和。",
    "intuition": "【树形 DP 递归】单侧最大贡献 = max(0, maxGain(child))。穿过该节点的最长路径为 `val + leftGain + rightGain`，用于更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxSum = Integer.MIN_VALUE;\npublic int maxPathSum(TreeNode root) {\n    maxGain(root); return maxSum;\n}\nprivate int maxGain(TreeNode node) {\n    if (node == null) return 0;\n    int L = Math.max(maxGain(node.left), 0);\n    int R = Math.max(maxGain(node.right), 0);\n    maxSum = Math.max(maxSum, node.val + L + R);\n    return node.val + Math.max(L, R);\n}",
      "python": "def maxPathSum(root: Optional[TreeNode]) -> int:\n    max_s = float('-inf')\n    def maxGain(node):\n        nonlocal max_s\n        if not node: return 0\n        L = max(maxGain(node.left), 0)\n        R = max(maxGain(node.right), 0)\n        max_s = max(max_s, node.val + L + R)\n        return node.val + max(L, R)\n    maxGain(root)\n    return max_s"
    }
  },
  {
    "id": 226,
    "title": "翻转二叉树",
    "englishTitle": "Invert Binary Tree",
    "difficulty": "简单",
    "category": "树",
    "description": "翻转这棵二叉树，并返回其根节点。",
    "intuition": "【镜像递归】交换当前节点的左右子树 `root.left <-> root.right`，而后递归镜像处理。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode temp = root.left;\n    root.left = invertTree(root.right);\n    root.right = invertTree(temp);\n    return root;\n}",
      "python": "def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root"
    }
  },
  {
    "id": 236,
    "title": "二叉树的最近公共祖先",
    "englishTitle": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "中等",
    "category": "树",
    "description": "找到二叉树中两个指定节点 p 和 q 的最近公共祖先 (LCA)。",
    "intuition": "【后序 DFS】若当前节点为 null 或等于 p/q 直接返回。若左右子树递归返回值均不为空，说明当前节点即为 LCA！",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}",
      "python": "def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n    if not root or root == p or root == q: return root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    if left and right: return root\n    return left or right"
    }
  },
  {
    "id": 297,
    "title": "二叉树的序列化与反序列化",
    "englishTitle": "Serialize and Deserialize Binary Tree",
    "difficulty": "困难",
    "category": "树",
    "description": "设计一个算法，将二叉树序列化为字符串，并能反序列化还原为原树结构。",
    "intuition": "【先序遍历 + 字符串 DFS】先序遍历记录节点与空节点 `#`。反序列化时按队列按序递归重建整棵树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public class Codec {\n    public String serialize(TreeNode root) {\n        if (root == null) return \"#\";\n        return root.val + \",\" + serialize(root.left) + \",\" + serialize(root.right);\n    }\n    public TreeNode deserialize(String data) {\n        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(\",\")));\n        return build(q);\n    }\n    private TreeNode build(Queue<String> q) {\n        String val = q.poll();\n        if (val.equals(\"#\")) return null;\n        TreeNode node = new TreeNode(Integer.parseInt(val));\n        node.left = build(q);\n        node.right = build(q);\n        return node;\n    }\n}",
      "python": "class Codec:\n    def serialize(self, root):\n        if not root: return \"#\"\n        return f\"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}\"\n    def deserialize(self, data):\n        vals = collections.deque(data.split(','))\n        def build():\n            val = vals.popleft()\n            if val == '#': return None\n            node = TreeNode(int(val))\n            node.left = build()\n            node.right = build()\n            return node\n        return build()"
    }
  },
  {
    "id": 337,
    "title": "打家劫舍 III",
    "englishTitle": "House Robber III",
    "difficulty": "中等",
    "category": "树",
    "description": "二叉树形状的房屋。相邻节点偷窃会报警。计算不触发报警能偷的最大金额。",
    "intuition": "【树形 DP 返回 [不偷当前, 偷当前]】对于节点 node：不偷当前 = max(left) + max(right)；偷当前 = val + left[0] + right[0]。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int rob(TreeNode root) {\n    int[] res = dp(root);\n    return Math.max(res[0], res[1]);\n}\nprivate int[] dp(TreeNode node) {\n    if (node == null) return new int[]{0, 0};\n    int[] left = dp(node.left);\n    int[] right = dp(node.right);\n    int notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);\n    int rob = node.val + left[0] + right[0];\n    return new int[]{notRob, rob};\n}",
      "python": "def rob(root: Optional[TreeNode]) -> int:\n    def dp(node):\n        if not node: return [0, 0]\n        left, right = dp(node.left), dp(node.right)\n        not_rob = max(left) + max(right)\n        rob = node.val + left[0] + right[0]\n        return [not_rob, rob]\n    return max(dp(root))"
    }
  },
  {
    "id": 437,
    "title": "路径总和 III",
    "englishTitle": "Path Sum III",
    "difficulty": "中等",
    "category": "树",
    "description": "求二叉树里节点值之和等于 targetSum 的路径数目。不要求从根开始或到叶子结束。",
    "intuition": "【树上前缀和 + HashMap 回溯】维护前缀和 Map。递归向下累加 currSum，在 Map 查 `currSum - targetSum` 频次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Long, Integer> prefix = new HashMap<>();\npublic int pathSum(TreeNode root, int targetSum) {\n    prefix.put(0L, 1); return dfs(root, 0L, targetSum);\n}\nprivate int dfs(TreeNode node, long curr, int target) {\n    if (node == null) return 0;\n    curr += node.val;\n    int res = prefix.getOrDefault(curr - target, 0);\n    prefix.put(curr, prefix.getOrDefault(curr, 0) + 1);\n    res += dfs(node.left, curr, target) + dfs(node.right, curr, target);\n    prefix.put(curr, prefix.get(curr) - 1);\n    return res;\n}",
      "python": "def pathSum(root: Optional[TreeNode], targetSum: int) -> int:\n    prefix = collections.defaultdict(int)\n    prefix[0] = 1\n    def dfs(node, curr):\n        if not node: return 0\n        curr += node.val\n        res = prefix[curr - targetSum]\n        prefix[curr] += 1\n        res += dfs(node.left, curr) + dfs(node.right, curr)\n        prefix[curr] -= 1\n        return res\n    return dfs(root, 0)"
    }
  },
  {
    "id": 538,
    "title": "把二叉搜索树转换为累加树",
    "englishTitle": "Convert BST to Greater Tree",
    "difficulty": "中等",
    "category": "树",
    "description": "使每个节点 node.val 等于原树中大于或等于 node.val 的所有节点值之和。",
    "intuition": "【反向中序遍历 (右 -> 根 -> 左)】BST 的反向中序遍历节点值严格单调递减。用全局变量 sum 累加遍历到的所有节点值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int sum = 0;\npublic TreeNode convertBST(TreeNode root) {\n    if (root != null) {\n        convertBST(root.right);\n        sum += root.val;\n        root.val = sum;\n        convertBST(root.left);\n    }\n    return root;\n}",
      "python": "def convertBST(root: Optional[TreeNode]) -> Optional[TreeNode]:\n    sum_v = 0\n    def dfs(node):\n        nonlocal sum_v\n        if not node: return\n        dfs(node.right)\n        sum_v += node.val\n        node.val = sum_v\n        dfs(node.left)\n    dfs(root); return root"
    }
  },
  {
    "id": 543,
    "title": "二叉树的直径",
    "englishTitle": "Diameter of Binary Tree",
    "difficulty": "简单",
    "category": "树",
    "description": "返回二叉树任意两个节点之间最长路径的长度。",
    "intuition": "【全局 max 维护路径】穿过该节点的最长路径 = leftDepth + rightDepth。在计算深度的后序 DFS 中更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxD = 0;\npublic int diameterOfBinaryTree(TreeNode root) {\n    depth(root); return maxD;\n}\nprivate int depth(TreeNode node) {\n    if (node == null) return 0;\n    int L = depth(node.left), R = depth(node.right);\n    maxD = Math.max(maxD, L + R);\n    return Math.max(L, R) + 1;\n}",
      "python": "def diameterOfBinaryTree(root: Optional[TreeNode]) -> int:\n    max_d = 0\n    def depth(node):\n        nonlocal max_d\n        if not node: return 0\n        L, R = depth(node.left), depth(node.right)\n        max_d = max(max_d, L + R)\n        return max(L, R) + 1\n    depth(root); return max_d"
    }
  },
  {
    "id": 617,
    "title": "合并二叉树",
    "englishTitle": "Merge Two Binary Trees",
    "difficulty": "简单",
    "category": "树",
    "description": "将两棵二叉树合并。重叠节点值相加，不重叠部分直接作为新节点。",
    "intuition": "【前序同步递归】若 root1 或 root2 为空返回另一个。否则 `root1.val += root2.val`，递归合并左右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {\n    if (root1 == null) return root2;\n    if (root2 == null) return root1;\n    root1.val += root2.val;\n    root1.left = mergeTrees(root1.left, root2.left);\n    root1.right = mergeTrees(root1.right, root2.right);\n    return root1;\n}",
      "python": "def mergeTrees(root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:\n    if not root1: return root2\n    if not root2: return root1\n    root1.val += root2.val\n    root1.left = mergeTrees(root1.left, root2.left)\n    root1.right = mergeTrees(root1.right, root2.right)\n    return root1"
    }
  },
  {
    "id": 208,
    "title": "实现 Trie (前缀树)",
    "englishTitle": "Implement Trie (Prefix Tree)",
    "difficulty": "中等",
    "category": "树",
    "description": "设计并实现前缀树 Trie ，支持 insert, search, startsWith 操作。",
    "intuition": "【26 叉树节点 TrieNode】每个节点包含 `children[26]` 和 `isEnd` 标志。字符串字符逐位向树枝匹配扩展。",
    "timeComplexity": "O(L)",
    "spaceComplexity": "O(L * 26)",
    "codeTemplates": {
      "java": "class Trie {\n    class TrieNode {\n        TrieNode[] children = new TrieNode[26];\n        boolean isEnd = false;\n    }\n    private TrieNode root = new TrieNode();\n    public void insert(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) {\n            if (node.children[c - 'a'] == null) node.children[c - 'a'] = new TrieNode();\n            node = node.children[c - 'a'];\n        }\n        node.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode node = find(word);\n        return node != null && node.isEnd;\n    }\n    public boolean startsWith(String prefix) {\n        return find(prefix) != null;\n    }\n    private TrieNode find(String s) {\n        TrieNode node = root;\n        for (char c : s.toCharArray()) {\n            if (node.children[c - 'a'] == null) return null;\n            node = node.children[c - 'a'];\n        }\n        return node;\n    }\n}",
      "python": "class Trie:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n    def insert(self, word: str) -> None:\n        node = self\n        for c in word:\n            if c not in node.children: node.children[c] = Trie()\n            node = node.children[c]\n        node.is_end = True\n    def search(self, word: str) -> bool:\n        node = self._find(word)\n        return node is not None and node.is_end\n    def startsWith(self, prefix: str) -> bool:\n        return self._find(prefix) is not None\n    def _find(self, prefix):\n        node = self\n        for c in prefix:\n            if c not in node.children: return None\n            node = node.children[c]\n        return node"
    }
  },
  {
    "id": 399,
    "title": "除法求值",
    "englishTitle": "Evaluate Division",
    "difficulty": "中等",
    "category": "图",
    "description": "给定变量对 equations 和数值 values。计算 queries 的除法结果。若无法确定返回 -1.0。",
    "intuition": "【有向带权图 DFS / 并查集】将 `A / B = val` 看作有向边 `A -> B` 权重为 val，`B -> A` 权重为 1/val。用 DFS 或带权并查集搜索路径乘积。",
    "timeComplexity": "O(Q * (V + E))",
    "spaceComplexity": "O(V + E)",
    "codeTemplates": {
      "java": "public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    Map<String, Map<String, Double>> graph = new HashMap<>();\n    for (int i = 0; i < equations.size(); i++) {\n        String u = equations.get(i).get(0), v = equations.get(i).get(1);\n        double val = values[i];\n        graph.computeIfAbsent(u, k -> new HashMap<>()).put(v, val);\n        graph.computeIfAbsent(v, k -> new HashMap<>()).put(u, 1.0 / val);\n    }\n    double[] res = new double[queries.size()];\n    for (int i = 0; i < queries.size(); i++) {\n        String start = queries.get(i).get(0), end = queries.get(i).get(1);\n        if (!graph.containsKey(start) || !graph.containsKey(end)) res[i] = -1.0;\n        else res[i] = dfs(graph, start, end, 1.0, new HashSet<>());\n    }\n    return res;\n}\nprivate double dfs(Map<String, Map<String, Double>> graph, String curr, String target, double acc, Set<String> visited) {\n    if (curr.equals(target)) return acc;\n    visited.add(curr);\n    for (Map.Entry<String, Double> neighbor : graph.get(curr).entrySet()) {\n        if (!visited.contains(neighbor.getKey())) {\n            double sub = dfs(graph, neighbor.getKey(), target, acc * neighbor.getValue(), visited);\n            if (sub != -1.0) return sub;\n        }\n    }\n    return -1.0;\n}",
      "python": "def calcEquation(equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:\n    graph = collections.defaultdict(dict)\n    for (u, v), val in zip(equations, values):\n        graph[u][v] = val\n        graph[v][u] = 1.0 / val\n    def dfs(curr, target, acc, visited):\n        if curr == target: return acc\n        visited.add(curr)\n        for nxt, val in graph[curr].items():\n            if nxt not in visited:\n                res = dfs(nxt, target, acc * val, visited)\n                if res != -1.0: return res\n        return -1.0\n    res = []\n    for u, v in queries:\n        if u not in graph or v not in graph: res.append(-1.0)\n        else: res.append(dfs(u, v, 1.0, set()))\n    return res"
    }
  },
  {
    "id": 17,
    "title": "电话号码的字母组合",
    "englishTitle": "Letter Combinations of a Phone Number",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "给定仅包含数字 2-9 的字符串 digits，返回所有它能表示的字母组合。",
    "intuition": "【按层映射 DFS 回溯】数字 -> 字母映射表。按 index 逐层选择当前数字对应的字母递归，达到长度时归纳结果。",
    "timeComplexity": "O(3^N * 4^M)",
    "spaceComplexity": "O(N + M)",
    "codeTemplates": {
      "java": "private String[] map = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\npublic List<String> letterCombinations(String digits) {\n    List<String> res = new ArrayList<>(); if (digits.isEmpty()) return res;\n    backtrack(res, new StringBuilder(), digits, 0);\n    return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, String digits, int idx) {\n    if (idx == digits.length()) { res.add(sb.toString()); return; }\n    String letters = map[digits.charAt(idx) - '0'];\n    for (char c : letters.toCharArray()) {\n        sb.append(c); backtrack(res, sb, digits, idx + 1); sb.deleteCharAt(sb.length() - 1);\n    }\n}",
      "python": "def letterCombinations(digits: str) -> List[str]:\n    if not digits: return []\n    mapping = {\"2\":\"abc\", \"3\":\"def\", \"4\":\"ghi\", \"5\":\"jkl\", \"6\":\"mno\", \"7\":\"pqrs\", \"8\":\"tuv\", \"9\":\"wxyz\"}\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits): res.append(\"\".join(path)); return\n        for c in mapping[digits[idx]]: path.append(c); backtrack(idx + 1, path); path.pop()\n    backtrack(0, []); return res"
    }
  },
  {
    "id": 22,
    "title": "括号生成",
    "englishTitle": "Generate Parentheses",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "数字 n 代表生成括号对数，生成所有有效的括号组合。",
    "intuition": "【左/右括号计数剪枝】left < n 时可加 '('；right < left 时可加 ')'。达 2*n 长度收集结果。",
    "timeComplexity": "O(4^N / sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<String> generateParenthesis(int n) {\n    List<String> res = new ArrayList<>(); backtrack(res, new StringBuilder(), 0, 0, n); return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, int l, int r, int max) {\n    if (sb.length() == max * 2) { res.add(sb.toString()); return; }\n    if (l < max) { sb.append('('); backtrack(res, sb, l + 1, r, max); sb.deleteCharAt(sb.length() - 1); }\n    if (r < l) { sb.append(')'); backtrack(res, sb, l, r + 1, max); sb.deleteCharAt(sb.length() - 1); }\n}",
      "python": "def generateParenthesis(n: int) -> List[str]:\n    res = []\n    def backtrack(l, r, path):\n        if len(path) == 2 * n: res.append(\"\".join(path)); return\n        if l < n: path.append('('); backtrack(l + 1, r, path); path.pop()\n        if r < l: path.append(')'); backtrack(l, r + 1, path); path.pop()\n    backtrack(0, 0, []); return res"
    }
  },
  {
    "id": 39,
    "title": "组合总和",
    "englishTitle": "Combination Sum",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "无重复元素数组 candidates 和目标 target ，找出和为 target 的所有组合。同数字可无限制重复选。",
    "intuition": "【可重复选择回溯 + 剪枝】遍历 start 索引。因为允许重复使用当前元素，下一层 start 仍传入 `i`。",
    "timeComplexity": "O(N^(Target/Min))",
    "spaceComplexity": "O(Target/Min)",
    "codeTemplates": {
      "java": "public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> res = new ArrayList<>(); Arrays.sort(candidates);\n    backtrack(res, new ArrayList<>(), candidates, target, 0); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] cand, int rem, int start) {\n    if (rem == 0) { res.add(new ArrayList<>(path)); return; }\n    for (int i = start; i < cand.length; i++) {\n        if (cand[i] > rem) break;\n        path.add(cand[i]); backtrack(res, path, cand, rem - cand[i], i); path.remove(path.size() - 1);\n    }\n}",
      "python": "def combinationSum(candidates: List[int], target: int) -> List[List[int]]:\n    res = []; candidates.sort()\n    def backtrack(start, rem, path):\n        if rem == 0: res.append(path[:]); return\n        for i in range(start, len(candidates)):\n            if candidates[i] > rem: break\n            path.append(candidates[i]); backtrack(i, rem - candidates[i], path); path.pop()\n    backtrack(0, target, []); return res"
    }
  },
  {
    "id": 46,
    "title": "全排列",
    "englishTitle": "Permutations",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "给定不含重复数字的数组 nums ，返回其所有全排列。",
    "intuition": "【used 数组记录】决策树每层选未使用的数字压入 path，回溯时撤销选择 `used[i]=false`。",
    "timeComplexity": "O(N * N!)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] used) {\n    if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < nums.length; i++) {\n        if (used[i]) continue;\n        used[i] = true; path.add(nums[i]); backtrack(res, path, nums, used);\n        path.remove(path.size() - 1); used[i] = false;\n    }\n}",
      "python": "def permute(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(path, used):\n        if len(path) == len(nums): res.append(path[:]); return\n        for i in range(len(nums)):\n            if not used[i]:\n                used[i] = True; path.append(nums[i]); backtrack(path, used)\n                path.pop(); used[i] = False\n    backtrack([], [False] * len(nums)); return res"
    }
  },
  {
    "id": 78,
    "title": "子集",
    "englishTitle": "Subsets",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "给你一个整数数组 nums ，返回该数组所有可能的子集（幂集）。",
    "intuition": "【所有节点皆解】遍历 start 索引。每个递归入口将 path 深拷贝加入结果 res。",
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>(); backtrack(res, new ArrayList<>(), nums, 0); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n    res.add(new ArrayList<>(path));\n    for (int i = start; i < nums.length; i++) {\n        path.add(nums[i]); backtrack(res, path, nums, i + 1); path.remove(path.size() - 1);\n    }\n}",
      "python": "def subsets(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i]); backtrack(i + 1, path); path.pop()\n    backtrack(0, []); return res"
    }
  },
  {
    "id": 79,
    "title": "单词搜索",
    "englishTitle": "Word Search",
    "difficulty": "中等",
    "category": "回溯和 DFS",
    "description": "给定二维字符网格 board 和单词 word 。判断 word 是否存在于网格中。",
    "intuition": "【Grid DFS 标记恢复】匹配当前字符后将格子标为 `#`，递归四个方向搜索，回溯时恢复原字符。",
    "timeComplexity": "O(M * N * 3^L)",
    "spaceComplexity": "O(L)",
    "codeTemplates": {
      "java": "public boolean exist(char[][] board, String word) {\n    int m = board.length, n = board[0].length;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (dfs(board, word, r, c, 0)) return true;\n        }\n    }\n    return false;\n}\nprivate boolean dfs(char[][] b, String w, int r, int c, int k) {\n    if (k == w.length()) return true;\n    if (r < 0 || r >= b.length || c < 0 || c >= b[0].length || b[r][c] != w.charAt(k)) return false;\n    char t = b[r][c]; b[r][c] = '#';\n    boolean res = dfs(b, w, r+1, c, k+1) || dfs(b, w, r-1, c, k+1) || dfs(b, w, r, c+1, k+1) || dfs(b, w, r, c-1, k+1);\n    b[r][c] = t;\n    return res;\n}",
      "python": "def exist(board: List[List[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n    def dfs(r, c, k):\n        if k == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[k]: return False\n        t, board[r][c] = board[r][c], '#'\n        res = dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)\n        board[r][c] = t; return res\n    for r in range(m):\n        for c in range(n):\n            if dfs(r, c, 0): return True\n    return False"
    }
  },
  {
    "id": 301,
    "title": "删除无效的括号",
    "englishTitle": "Remove Invalid Parentheses",
    "difficulty": "困难",
    "category": "回溯和 DFS",
    "description": "给你一个由括号和字母组成的字符串 s ，删除最少数目的无效括号，使得剩下的字符串合法。",
    "intuition": "【统计非法多余左右括号 + 回溯剪枝】先统计多余左括号 l 和右括号 r 的数量。递归删除非重复字符使得 l=0, r=0 且整体 isValid。",
    "timeComplexity": "O(2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<String> removeInvalidParentheses(String s) {\n    int l = 0, r = 0;\n    for (char c : s.toCharArray()) {\n        if (c == '(') l++;\n        else if (c == ')') { if (l > 0) l--; else r++; }\n    }\n    List<String> res = new ArrayList<>();\n    dfs(s, 0, l, r, res);\n    return res;\n}\nprivate void dfs(String s, int start, int l, int r, List<String> res) {\n    if (l == 0 && r == 0) { if (isValid(s)) res.add(s); return; }\n    for (int i = start; i < s.length(); i++) {\n        if (i > start && s.charAt(i) == s.charAt(i - 1)) continue; // 去重\n        if (s.charAt(i) == '(' && l > 0) dfs(s.substring(0, i) + s.substring(i + 1), i, l - 1, r, res);\n        if (s.charAt(i) == ')' && r > 0) dfs(s.substring(0, i) + s.substring(i + 1), i, l, r - 1, res);\n    }\n}\nprivate boolean isValid(String s) {\n    int cnt = 0;\n    for (char c : s.toCharArray()) {\n        if (c == '(') cnt++;\n        else if (c == ')') { cnt--; if (cnt < 0) return false; }\n    }\n    return cnt == 0;\n}",
      "python": "def removeInvalidParentheses(s: str) -> List[str]:\n    l = r = 0\n    for c in s:\n        if c == '(': l += 1\n        elif c == ')':\n            if l > 0: l -= 1\n            else: r += 1\n    res = []\n    def isValid(sub):\n        cnt = 0\n        for c in sub:\n            if c == '(': cnt += 1\n            elif c == ')':\n                cnt -= 1\n                if cnt < 0: return False\n        return cnt == 0\n    def dfs(string, start, l_rem, r_rem):\n        if l_rem == 0 and r_rem == 0:\n            if isValid(string): res.append(string)\n            return\n        for i in range(start, len(string)):\n            if i > start and string[i] == string[i-1]: continue\n            if string[i] == '(' and l_rem > 0:\n                dfs(string[:i] + string[i+1:], i, l_rem - 1, r_rem)\n            if string[i] == ')' and r_rem > 0:\n                dfs(string[:i] + string[i+1:], i, l_rem, r_rem - 1)\n    dfs(s, 0, l, r)\n    return res"
    }
  },
  {
    "id": 200,
    "title": "岛屿数量",
    "englishTitle": "Number of Islands",
    "difficulty": "中等",
    "category": "BFS",
    "description": "给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算网格中岛屿的数量。",
    "intuition": "【Grid BFS / DFS 沉岛】遇 '1' 计数器+1，启动 BFS 将相邻四连通的 '1' 染色淹没置为 '0'。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int numIslands(char[][] grid) {\n    int count = 0;\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[0].length; c++) {\n            if (grid[r][c] == '1') { count++; dfs(grid, r, c); }\n        }\n    }\n    return count;\n}\nprivate void dfs(char[][] g, int r, int c) {\n    if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] != '1') return;\n    g[r][c] = '0'; dfs(g, r-1, c); dfs(g, r+1, c); dfs(g, r, c-1); dfs(g, r, c+1);\n}",
      "python": "def numIslands(grid: List[List[str]]) -> int:\n    cnt = 0\n    def dfs(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] != '1': return\n        grid[r][c] = '0'\n        dfs(r-1, c); dfs(r+1, c); dfs(r, c-1); dfs(r, c+1)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == '1': cnt += 1; dfs(r, c)\n    return cnt"
    }
  },
  {
    "id": 207,
    "title": "课程表",
    "englishTitle": "Course Schedule",
    "difficulty": "中等",
    "category": "BFS",
    "description": "判断是否可能完成所有课程的学习（根据先修课程条件）。",
    "intuition": "【拓扑排序 BFS】计算各节点入度。将入度为 0 的节点加入 Queue，弹出时使其邻居入度减 1。最终节点数等于总课程数则有解。",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "codeTemplates": {
      "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] inDegree = new int[numCourses];\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] p : prerequisites) { inDegree[p[0]]++; adj.get(p[1]).add(p[0]); }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);\n    int count = 0;\n    while (!q.isEmpty()) {\n        int curr = q.poll(); count++;\n        for (int next : adj.get(curr)) if (--inDegree[next] == 0) q.offer(next);\n    }\n    return count == numCourses;\n}",
      "python": "def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:\n    in_deg = [0] * numCourses\n    adj = collections.defaultdict(list)\n    for cur, pre in prerequisites: in_deg[cur] += 1; adj[pre].append(cur)\n    q = collections.deque([i for i in range(numCourses) if in_deg[i] == 0])\n    cnt = 0\n    while q:\n        curr = q.popleft(); cnt += 1\n        for nxt in adj[curr]:\n            in_deg[nxt] -= 1\n            if in_deg[nxt] == 0: q.append(nxt)\n    return cnt == numCourses"
    }
  },
  {
    "id": 10,
    "title": "正则表达式匹配",
    "englishTitle": "Regular Expression Matching",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。",
    "intuition": "【2D DP 状态机】`dp[i][j]` 表示 s[0..i-1] 和 p[0..j-1] 是否匹配。处理 `*` 匹配 0 次或多次的情况。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public boolean isMatch(String s, String p) {\n    int m = s.length(), n = p.length();\n    boolean[][] dp = new boolean[m + 1][n + 1];\n    dp[0][0] = true;\n    for (int j = 2; j <= n; j += 2) {\n        if (p.charAt(j - 1) == '*') dp[0][j] = dp[0][j - 2];\n    }\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            char sc = s.charAt(i - 1), pc = p.charAt(j - 1);\n            if (pc == '*') {\n                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (sc == p.charAt(j - 2) || p.charAt(j - 2) == '.'));\n            } else {\n                dp[i][j] = dp[i - 1][j - 1] && (sc == pc || pc == '.');\n            }\n        }\n    }\n    return dp[m][n];\n}",
      "python": "def isMatch(s: str, p: str) -> bool:\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n    for j in range(2, n + 1, 2):\n        if p[j - 1] == '*': dp[0][j] = dp[0][j - 2]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j - 1] == '*':\n                dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] and (s[i - 1] == p[j - 2] or p[j - 2] == '.'))\n            else:\n                dp[i][j] = dp[i - 1][j - 1] and (s[i - 1] == p[j - 1] or p[j - 1] == '.')\n    return dp[m][n]"
    }
  },
  {
    "id": 32,
    "title": "最长有效括号",
    "englishTitle": "Longest Valid Parentheses",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "给你一个只包含 '(' 和 ')' 的字符串，找出最长有效括号子串的长度。",
    "intuition": "【栈存未匹配边界下标】栈初始压入 -1。遇 '(' 压栈下标，遇 ')' 弹出栈顶。若栈空则将当前下标压栈，否则更新 `i - stack.peek()`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestValidParentheses(String s) {\n    Stack<Integer> st = new Stack<>(); st.push(-1);\n    int maxLen = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) == '(') st.push(i);\n        else {\n            st.pop();\n            if (st.isEmpty()) st.push(i);\n            else maxLen = Math.max(maxLen, i - st.peek());\n        }\n    }\n    return maxLen;\n}",
      "python": "def longestValidParentheses(s: str) -> int:\n    st, max_l = [-1], 0\n    for i, c in enumerate(s):\n        if c == '(': st.append(i)\n        else:\n            st.pop()\n            if not st: st.append(i)\n            else: max_l = max(max_l, i - st[-1])\n    return max_l"
    }
  },
  {
    "id": 53,
    "title": "最大子数组和",
    "englishTitle": "Maximum Subarray",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "找出一个具有最大和的连续子数组，返回其最大和。",
    "intuition": "【Kadane 算法】`currSum = max(nums[i], currSum + nums[i])`。累加和负数时重新以 nums[i] 为起点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxSubArray(int[] nums) {\n    int max = nums[0], curr = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        curr = Math.max(nums[i], curr + nums[i]); max = Math.max(max, curr);\n    }\n    return max;\n}",
      "python": "def maxSubArray(nums: List[int]) -> int:\n    max_s = curr = nums[0]\n    for num in nums[1:]:\n        curr = max(num, curr + num); max_s = max(max_s, curr)\n    return max_s"
    }
  },
  {
    "id": 62,
    "title": "不同路径",
    "englishTitle": "Unique Paths",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "机器人位于 m x n 网格左上角，每次向下或向右移动一步。求到达右下角不同路径数。",
    "intuition": "【网格 1D DP 优化】`dp[j] += dp[j-1]`。初始化数组全为 1。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int uniquePaths(int m, int n) {\n    int[] dp = new int[n]; Arrays.fill(dp, 1);\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n    }\n    return dp[n - 1];\n}",
      "python": "def uniquePaths(m: int, n: int) -> int:\n    dp = [1] * n\n    for i in range(1, m):\n        for j in range(1, n): dp[j] += dp[j - 1]\n    return dp[-1]"
    }
  },
  {
    "id": 64,
    "title": "最小路径和",
    "englishTitle": "Minimum Path Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "m x n 网格 grid，找出从左上到右下路径上的数字总和最小者。",
    "intuition": "【网格 DP】`grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int minPathSum(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 && j == 0) continue;\n            else if (i == 0) grid[i][j] += grid[i][j - 1];\n            else if (j == 0) grid[i][j] += grid[i - 1][j];\n            else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n        }\n    }\n    return grid[m - 1][n - 1];\n}",
      "python": "def minPathSum(grid: List[List[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    for i in range(m):\n        for j in range(n):\n            if i == 0 and j == 0: continue\n            elif i == 0: grid[i][j] += grid[i][j - 1]\n            elif j == 0: grid[i][j] += grid[i - 1][j]\n            else: grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])\n    return grid[-1][-1]"
    }
  },
  {
    "id": 70,
    "title": "爬楼梯",
    "englishTitle": "Climbing Stairs",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "爬 n 阶楼梯。每次可以爬 1 或 2 个台阶。求方法数。",
    "intuition": "【斐波那契 DP】dp[n] = dp[n-1] + dp[n-2]。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i <= n; i++) {\n        int t = a + b; a = b; b = t;\n    }\n    return b;\n}",
      "python": "def climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1): a, b = b, a + b\n    return b"
    }
  },
  {
    "id": 72,
    "title": "编辑距离",
    "englishTitle": "Edit Distance",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "计算将 word1 转换成 word2 的最少操作数（插入、删除、替换）。",
    "intuition": "【2D DP】字符匹配 `dp[i][j] = dp[i-1][j-1]`，不匹配 `min(插入, 删除, 替换) + 1`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];\n            else dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;\n        }\n    }\n    return dp[m][n];\n}",
      "python": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]: dp[i][j] = dp[i - 1][j - 1]\n            else: dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1\n    return dp[m][n]"
    }
  },
  {
    "id": 121,
    "title": "买卖股票的最佳时机",
    "englishTitle": "Best Time to Buy and Sell Stock",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "数组 prices[i] 为股票价格。买入一次并未来卖出，求最大利润。",
    "intuition": "【动态维护最低价格 minPrice】遍历价格计算当前卖出利润 `p - minPrice`，更新 maxProfit。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProfit(int[] prices) {\n    int minPrice = Integer.MAX_VALUE, maxProfit = 0;\n    for (int p : prices) {\n        if (p < minPrice) minPrice = p;\n        else if (p - minPrice > maxProfit) maxProfit = p - minPrice;\n    }\n    return maxProfit;\n}",
      "python": "def maxProfit(prices: List[int]) -> int:\n    min_p, max_p = float('inf'), 0\n    for p in prices:\n        min_p = min(min_p, p)\n        max_p = max(max_p, p - min_p)\n    return max_p"
    }
  },
  {
    "id": 139,
    "title": "单词拆分",
    "englishTitle": "Word Break",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "判断字符串 s 是否可以由 wordDict 中出现的单词拼接而成。",
    "intuition": "【前缀字符串 DP】`dp[i]` 表示前 i 个字符 s[0..i-1] 是否可被词典拆分。`dp[i] = dp[j] && wordSet.contains(s[j..i-1])`。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> wordSet = new HashSet<>(wordDict);\n    boolean[] dp = new boolean[s.length() + 1]; dp[0] = true;\n    for (int i = 1; i <= s.length(); i++) {\n        for (int j = 0; j < i; j++) {\n            if (dp[j] && wordSet.contains(s.substring(j, i))) { dp[i] = true; break; }\n        }\n    }\n    return dp[s.length()];\n}",
      "python": "def wordBreak(s: str, wordDict: List[str]) -> bool:\n    word_set = set(wordDict)\n    dp = [True] + [False] * len(s)\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_set: dp[i] = True; break\n    return dp[len(s)]"
    }
  },
  {
    "id": 152,
    "title": "乘积最大子数组",
    "englishTitle": "Maximum Product Subarray",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "找出乘积最大的连续子数组，返回其乘积。",
    "intuition": "【双变量维护 maxDP 与 minDP】负负得正！遇负数交换 `maxVal <-> minVal`，同时更新乘积最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProduct(int[] nums) {\n    int max = nums[0], min = nums[0], res = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        if (nums[i] < 0) { int t = max; max = min; min = t; }\n        max = Math.max(nums[i], max * nums[i]);\n        min = Math.min(nums[i], min * nums[i]);\n        res = Math.max(res, max);\n    }\n    return res;\n}",
      "python": "def maxProduct(nums: List[int]) -> int:\n    max_p = min_p = res = nums[0]\n    for num in nums[1:]:\n        if num < 0: max_p, min_p = min_p, max_p\n        max_p = max(num, max_p * num); min_p = min(num, min_p * num)\n        res = max(res, max_p)\n    return res"
    }
  },
  {
    "id": 221,
    "title": "最大正方形",
    "englishTitle": "Maximal Square",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "在由 '0' 和 '1' 组成的二维矩阵中，找到只包含 '1' 的最大正方形，并返回其面积。",
    "intuition": "【DP 边长更新】`dp[i][j]` 表示以 (i,j) 为右下角正方形最大边长。若 `matrix[i][j] == '1'`，`dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int maximalSquare(char[][] matrix) {\n    int m = matrix.length, n = matrix[0].length;\n    int[][] dp = new int[m + 1][n + 1];\n    int maxSide = 0;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (matrix[i - 1][j - 1] == '1') {\n                dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;\n                maxSide = Math.max(maxSide, dp[i][j]);\n            }\n        }\n    }\n    return maxSide * maxSide;\n}",
      "python": "def maximalSquare(matrix: List[List[str]]) -> int:\n    m, n = len(matrix), len(matrix[0])\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    max_side = 0\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if matrix[i - 1][j - 1] == '1':\n                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1\n                max_side = max(max_side, dp[i][j])\n    return max_side * max_side"
    }
  },
  {
    "id": 279,
    "title": "完全平方数",
    "englishTitle": "Perfect Squares",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。",
    "intuition": "【完全背包 DP】`dp[i] = min(dp[i], dp[i - j*j] + 1)`。",
    "timeComplexity": "O(N * sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int numSquares(int n) {\n    int[] dp = new int[n + 1]; Arrays.fill(dp, Integer.MAX_VALUE); dp[0] = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n    return dp[n];\n}",
      "python": "def numSquares(n: int) -> int:\n    dp = [float('inf')] * (n + 1); dp[0] = 0\n    for i in range(1, n + 1):\n        j = 1\n        while j * j <= i:\n            dp[i] = min(dp[i], dp[i - j * j] + 1); j += 1\n    return dp[n]"
    }
  },
  {
    "id": 300,
    "title": "最长递增子序列",
    "englishTitle": "Longest Increasing Subsequence",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "找到整数数组 nums 中最长严格递增子序列的长度。",
    "intuition": "【贪心 + 二分 (tails 数组)】tails[i] 维护长度 i+1 的递增子序列末尾最小元素。用二分查找首个 >= num 覆盖。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int lengthOfLIS(int[] nums) {\n    int[] tails = new int[nums.length]; int res = 0;\n    for (int num : nums) {\n        int i = 0, j = res;\n        while (i < j) {\n            int m = (i + j) / 2;\n            if (tails[m] < num) i = m + 1; else j = m;\n        }\n        tails[i] = num;\n        if (j == res) res++;\n    }\n    return res;\n}",
      "python": "def lengthOfLIS(nums: List[int]) -> int:\n    import bisect\n    tails = []\n    for num in nums:\n        idx = bisect.bisect_left(tails, num)\n        if idx == len(tails): tails.append(num)\n        else: tails[idx] = num\n    return len(tails)"
    }
  },
  {
    "id": 309,
    "title": "最佳买卖股票时机含冷冻期",
    "englishTitle": "Best Time to Buy and Sell Stock with Cooldown",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "买卖股票含冷冻期 1 天。卖出股票后无法在第二天买入。求最大利润。",
    "intuition": "【3状态 DP】`dp[i][0]` 持股，`dp[i][1]` 不持股处于冷冻期，`dp[i][2]` 不持股非冷冻期。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProfit(int[] prices) {\n    if (prices.length == 0) return 0;\n    int f0 = -prices[0], f1 = 0, f2 = 0;\n    for (int i = 1; i < prices.length; i++) {\n        int newF0 = Math.max(f0, f2 - prices[i]);\n        int newF1 = f0 + prices[i];\n        int newF2 = Math.max(f1, f2);\n        f0 = newF0; f1 = newF1; f2 = newF2;\n    }\n    return Math.max(f1, f2);\n}",
      "python": "def maxProfit(prices: List[int]) -> int:\n    if not prices: return 0\n    f0, f1, f2 = -prices[0], 0, 0\n    for i in range(1, len(prices)):\n        n_f0 = max(f0, f2 - prices[i])\n        n_f1 = f0 + prices[i]\n        n_f2 = max(f1, f2)\n        f0, f1, f2 = n_f0, n_f1, n_f2\n    return max(f1, f2)"
    }
  },
  {
    "id": 312,
    "title": "戳气球",
    "englishTitle": "Burst Balloons",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "戳破气球 i 获得 `nums[i-1] * nums[i] * nums[i+1]` 个硬币。求能获得的最大硬币数量。",
    "intuition": "【区间 DP (反向思考开区间最后戳破的元素 k)】`dp[i][j]` 表示戳破开区间 (i, j) 内所有气球的最大硬币数。`dp[i][j] = max(dp[i][k] + dp[k][j] + val[i]*val[k]*val[j])`。",
    "timeComplexity": "O(N^3)",
    "spaceComplexity": "O(N^2)",
    "codeTemplates": {
      "java": "public int maxCoins(int[] nums) {\n    int n = nums.length;\n    int[] val = new int[n + 2];\n    val[0] = val[n + 1] = 1;\n    System.arraycopy(nums, 0, val, 1, n);\n    int[][] dp = new int[n + 2][n + 2];\n    for (int len = 3; len <= n + 2; len++) {\n        for (int i = 0; i <= n + 2 - len; i++) {\n            int j = i + len - 1;\n            for (int k = i + 1; k < j; k++) {\n                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + val[i] * val[k] * val[j]);\n            }\n        }\n    }\n    return dp[0][n + 1];\n}",
      "python": "def maxCoins(nums: List[int]) -> int:\n    n = len(nums)\n    val = [1] + nums + [1]\n    dp = [[0] * (n + 2) for _ in range(n + 2)]\n    for length in range(3, n + 3):\n        for i in range(0, n + 3 - length):\n            j = i + length - 1\n            for k in range(i + 1, j):\n                dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + val[i] * val[k] * val[j])\n    return dp[0][n + 1]"
    }
  },
  {
    "id": 322,
    "title": "零钱兑换",
    "englishTitle": "Coin Change",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "计算并返回凑成总金额 amount 所需的最少硬币个数。",
    "intuition": "【完全背包 DP】`dp[i] = min(dp[i], dp[i - coin] + 1)`。",
    "timeComplexity": "O(Amount * N)",
    "spaceComplexity": "O(Amount)",
    "codeTemplates": {
      "java": "public int coinChange(int[] coins, int amount) {\n    int max = amount + 1;\n    int[] dp = new int[amount + 1]; Arrays.fill(dp, max); dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int c : coins) if (i >= c) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      "python": "def coinChange(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1); dp[0] = 0\n    for c in coins:\n        for i in range(c, amount + 1): dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1"
    }
  },
  {
    "id": 416,
    "title": "分割等和子集",
    "englishTitle": "Partition Equal Subset Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "判断是否可以将数组分割成两个子集，使得两个子集的元素和相等。",
    "intuition": "【0-1 背包 DP】判断是否存在子集和等于 sum / 2。`dp[j] = dp[j] || dp[j - num]`。",
    "timeComplexity": "O(N * Target)",
    "spaceComplexity": "O(Target)",
    "codeTemplates": {
      "java": "public boolean canPartition(int[] nums) {\n    int sum = 0; for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    boolean[] dp = new boolean[target + 1]; dp[0] = true;\n    for (int num : nums) {\n        for (int j = target; j >= num; j--) dp[j] = dp[j] || dp[j - num];\n    }\n    return dp[target];\n}",
      "python": "def canPartition(nums: List[int]) -> bool:\n    total = sum(nums)\n    if total % 2 != 0: return False\n    target = total // 2\n    dp = [True] + [False] * target\n    for num in nums:\n        for j in range(target, num - 1, -1): dp[j] = dp[j] or dp[j - num]\n    return dp[target]"
    }
  },
  {
    "id": 494,
    "title": "目标和",
    "englishTitle": "Target Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "在数组元素前添加 '+' 或 '-' 使运算结果等于 target。求方案数。",
    "intuition": "【转化 0-1 背包求方案数】设正数和 P，负数和 N。P - N = target 且 P + N = sum => `P = (target + sum) / 2`。转换为选元素凑出正数和 P 的方案数。",
    "timeComplexity": "O(N * P)",
    "spaceComplexity": "O(P)",
    "codeTemplates": {
      "java": "public int findTargetSumWays(int[] nums, int target) {\n    int sum = 0; for (int n : nums) sum += n;\n    if (Math.abs(target) > sum || (sum + target) % 2 != 0) return 0;\n    int p = (sum + target) / 2;\n    int[] dp = new int[p + 1]; dp[0] = 1;\n    for (int num : nums) {\n        for (int j = p; j >= num; j--) dp[j] += dp[j - num];\n    }\n    return dp[p];\n}",
      "python": "def findTargetSumWays(nums: List[int], target: int) -> int:\n    total = sum(nums)\n    if abs(target) > total or (total + target) % 2 != 0: return 0\n    p = (total + target) // 2\n    dp = [1] + [0] * p\n    for num in nums:\n        for j in range(p, num - 1, -1): dp[j] += dp[j - num]\n    return dp[p]"
    }
  },
  {
    "id": 55,
    "title": "跳跃游戏",
    "englishTitle": "Jump Game",
    "difficulty": "中等",
    "category": "贪心",
    "description": "数组 nums 每个元素代表最大跳跃长度，判断是否能到达最后一个下标。",
    "intuition": "【最远可达位置 maxReach】实时更新 `maxReach = max(maxReach, i + nums[i])`。若 i > maxReach 则无法继续前进。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}",
      "python": "def canJump(nums: List[int]) -> bool:\n    max_r = 0\n    for i, num in enumerate(nums):\n        if i > max_r: return False\n        max_r = max(max_r, i + num)\n    return True"
    }
  },
  {
    "id": 56,
    "title": "合并区间",
    "englishTitle": "Merge Intervals",
    "difficulty": "中等",
    "category": "贪心",
    "description": "合并所有重叠的区间，并返回不重叠的区间数组。",
    "intuition": "【按 start 排序】若当前 interval[0] <= 最后一个已合并区间的 end，产生重叠，更新 `end = max(end1, end2)`。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    List<int[]> res = new ArrayList<>();\n    for (int[] interval : intervals) {\n        if (res.isEmpty() || res.get(res.size() - 1)[1] < interval[0]) res.add(interval);\n        else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], interval[1]);\n    }\n    return res.toArray(new int[res.size()][]);\n}",
      "python": "def merge(intervals: List[List[int]]) -> List[List[int]]:\n    intervals.sort(key=lambda x: x[0]); res = []\n    for interval in intervals:\n        if not res or res[-1][1] < interval[0]: res.append(interval)\n        else: res[-1][1] = max(res[-1][1], interval[1])\n    return res"
    }
  },
  {
    "id": 406,
    "title": "根据身高重建队列",
    "englishTitle": "Queue Reconstruction by Height",
    "difficulty": "中等",
    "category": "贪心",
    "description": "people[i] = [hi, ki] 表示第 i 个人的身高为 hi，前面有 ki 个身高大于或等于 hi 的人。重建并返回队列。",
    "intuition": "【按身高降序、k 值升序排序 + List 按 k 插入】身高从高到低排序，矮的人插入不影响高的人的 k 值限制。遍历按 `ki` 插入列表。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[][] reconstructQueue(int[][] people) {\n    Arrays.sort(people, (a, b) -> {\n        if (a[0] != b[0]) return Integer.compare(b[0], a[0]); // 身高降序\n        return Integer.compare(a[1], b[1]); // k 升序\n    });\n    List<int[]> list = new ArrayList<>();\n    for (int[] p : people) {\n        list.add(p[1], p); // 插入到索引 k 处\n    }\n    return list.toArray(new int[people.length][]);\n}",
      "python": "def reconstructQueue(people: List[List[int]]) -> List[List[int]]:\n    people.sort(key=lambda x: (-x[0], x[1]))\n    res = []\n    for p in people:\n        res.insert(p[1], p)\n    return res"
    }
  },
  {
    "id": 621,
    "title": "任务调度器",
    "englishTitle": "Task Scheduler",
    "difficulty": "中等",
    "category": "贪心",
    "description": "CPU 执行任务，相同任务间需有 n 个冷却时间。求完成所有任务的最短时间。",
    "intuition": "【最大频次任务构筑框架】设最高频次任务出现 maxFreq 次，有 maxCount 个任务达到了最高频次。基准空闲框架公式 `(maxFreq - 1) * (n + 1) + maxCount`。与总任务数取最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(26)",
    "codeTemplates": {
      "java": "public int leastInterval(char[] tasks, int n) {\n    int[] counts = new int[26];\n    for (char c : tasks) counts[c - 'A']++;\n    int maxFreq = 0, maxCount = 0;\n    for (int c : counts) {\n        if (c > maxFreq) { maxFreq = c; maxCount = 1; }\n        else if (c == maxFreq) maxCount++;\n    }\n    int partCount = maxFreq - 1;\n    int partLength = n - (maxCount - 1);\n    int emptySlots = partCount * partLength;\n    int availableTasks = tasks.length - maxFreq * maxCount;\n    int idles = Math.max(0, emptySlots - availableTasks);\n    return tasks.length + idles;\n}",
      "python": "def leastInterval(tasks: List[str], n: int) -> int:\n    counts = collections.Counter(tasks)\n    max_freq = max(counts.values())\n    max_count = sum(1 for v in counts.values() if v == max_freq)\n    return max(len(tasks), (max_freq - 1) * (n + 1) + max_count)"
    }
  },
  {
    "id": 581,
    "title": "最短无序连续子数组",
    "englishTitle": "Shortest Unsorted Continuous Subarray",
    "difficulty": "中等",
    "category": "贪心",
    "description": "找出递增数组中需要升序排序的最短连续子数组长度。",
    "intuition": "【正向维护 max 找右界 + 逆向维护 min 找左界】从左到右维护 max，若当前值 < max，说明其处于无序区间右界；同理从右到左维护 min 找左界。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findUnsortedSubarray(int[] nums) {\n    int n = nums.length;\n    int max = Integer.MIN_VALUE, right = -1;\n    int min = Integer.MAX_VALUE, left = -1;\n    for (int i = 0; i < n; i++) {\n        if (max > nums[i]) right = i;\n        else max = nums[i];\n        if (min < nums[n - 1 - i]) left = n - 1 - i;\n        else min = nums[n - 1 - i];\n    }\n    return right == -1 ? 0 : right - left + 1;\n}",
      "python": "def findUnsortedSubarray(nums: List[int]) -> int:\n    n = len(nums)\n    max_v, right = float('-inf'), -1\n    min_v, left = float('inf'), -1\n    for i in range(n):\n        if max_v > nums[i]: right = i\n        else: max_v = nums[i]\n        if min_v < nums[n - 1 - i]: left = n - 1 - i\n        else: min_v = nums[n - 1 - i]\n    return 0 if right == -1 else right - left + 1"
    }
  },
  {
    "id": 253,
    "title": "会议室 II",
    "englishTitle": "Meeting Rooms II",
    "difficulty": "中等",
    "category": "贪心",
    "description": "给你一个会议时间安排的数组 intervals ，每个会议时间包括开始和结束时间[[s1,e1],[s2,e2],...]。返回所需的最少会议室数量。",
    "intuition": "【小顶堆维护会议结束时间】按 start 排序。维护结束时间小顶堆。若当前会议 start >= 堆顶最早结束时间，复用该会议室 `pq.poll()`，随后把当前会议 end 入堆。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int minMeetingRooms(int[][] intervals) {\n    if (intervals == null || intervals.length == 0) return 0;\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    PriorityQueue<Integer> allocator = new PriorityQueue<>();\n    allocator.add(intervals[0][1]);\n    for (int i = 1; i < intervals.length; i++) {\n        if (intervals[i][0] >= allocator.peek()) {\n            allocator.poll(); // 复用会议室\n        }\n        allocator.add(intervals[i][1]);\n    }\n    return allocator.size();\n}",
      "python": "def minMeetingRooms(intervals: List[List[int]]) -> int:\n    if not intervals: return 0\n    intervals.sort(key=lambda x: x[0])\n    import heapq\n    rooms = [] # min_heap of end times\n    heapq.heappush(rooms, intervals[0][1])\n    for i in range(1, len(intervals)):\n        if intervals[i][0] >= rooms[0]:\n            heapq.heappop(rooms)\n        heapq.heappush(rooms, intervals[i][1])\n    return len(rooms)"
    }
  },
  {
    "id": 42,
    "title": "接雨水",
    "englishTitle": "Trapping Rain Water",
    "difficulty": "困难",
    "category": "单调栈",
    "description": "给定 n 个非负整数表示柱子高度，计算下雨后能接多少雨水。",
    "intuition": "【左右最大值双指针 / 单调递减栈】每个柱子接水量 = min(leftMax, rightMax) - height[i]。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int trap(int[] height) {\n    int left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, ans = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left]; else ans += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right]; else ans += rightMax - height[right];\n            right--;\n        }\n    }\n    return ans;\n}",
      "python": "def trap(height: List[int]) -> int:\n    l, r, l_max, r_max, ans = 0, len(height) - 1, 0, 0, 0\n    while l < r:\n        if height[l] < height[r]:\n            if height[l] >= l_max: l_max = height[l]\n            else: ans += l_max - height[l]\n            l += 1\n        else:\n            if height[r] >= r_max: r_max = height[r]\n            else: ans += r_max - height[r]\n            r -= 1\n    return ans"
    }
  },
  {
    "id": 84,
    "title": "柱状图中最大的矩形",
    "englishTitle": "Largest Rectangle in Histogram",
    "difficulty": "困难",
    "category": "单调栈",
    "description": "各个柱子的高度和宽度为 1，求能够勾勒出的矩形的最大面积。",
    "intuition": "【单调递增栈 + 哨兵 0】遇到较矮柱子时，栈顶柱子确定了高度，左右较矮柱子确定了宽度 `h * (right - left - 1)`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int largestRectangleArea(int[] heights) {\n    int n = heights.length;\n    int[] h = new int[n + 2]; System.arraycopy(heights, 0, h, 1, n);\n    Stack<Integer> st = new Stack<>(); int maxArea = 0;\n    for (int i = 0; i < h.length; i++) {\n        while (!st.isEmpty() && h[i] < h[st.peek()]) {\n            int height = h[st.pop()], width = i - st.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        st.push(i);\n    }\n    return maxArea;\n}",
      "python": "def largestRectangleArea(heights: List[int]) -> int:\n    h = [0] + heights + [0]\n    st, max_a = [], 0\n    for i, val in enumerate(h):\n        while st and val < h[st[-1]]:\n            height = h[st.pop()]\n            width = i - st[-1] - 1\n            max_a = max(max_a, height * width)\n        st.append(i)\n    return max_a"
    }
  },
  {
    "id": 85,
    "title": "最大矩形",
    "englishTitle": "Maximal Rectangle",
    "difficulty": "困难",
    "category": "单调栈",
    "description": "给定一个仅包含 0 和 1 的 2D 二维二进制矩阵，找出只包含 1 的最大矩形并返回其面积。",
    "intuition": "【转化为逐行 84 题柱状图单调栈】逐行维护每个位置向上连续 1 的高度 heights 数组，对每一行运行 84 题柱状图单调栈算法。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int maximalRectangle(char[][] matrix) {\n    if (matrix == null || matrix.length == 0) return 0;\n    int m = matrix.length, n = matrix[0].length;\n    int[] heights = new int[n];\n    int maxArea = 0;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            heights[j] = (matrix[i][j] == '1') ? heights[j] + 1 : 0;\n        }\n        maxArea = Math.max(maxArea, largestInLine(heights));\n    }\n    return maxArea;\n}\nprivate int largestInLine(int[] heights) {\n    int n = heights.length;\n    int[] h = new int[n + 2]; System.arraycopy(heights, 0, h, 1, n);\n    Stack<Integer> st = new Stack<>(); int maxA = 0;\n    for (int i = 0; i < h.length; i++) {\n        while (!st.isEmpty() && h[i] < h[st.peek()]) {\n            int height = h[st.pop()], width = i - st.peek() - 1;\n            maxA = Math.max(maxA, height * width);\n        }\n        st.push(i);\n    }\n    return maxA;\n}",
      "python": "def maximalRectangle(matrix: List[List[str]]) -> int:\n    if not matrix or not matrix[0]: return 0\n    m, n = len(matrix), len(matrix[0])\n    heights = [0] * n\n    max_area = 0\n    def calcMax(heights):\n        h = [0] + heights + [0]\n        st, max_a = [], 0\n        for i, val in enumerate(h):\n            while st and val < h[st[-1]]:\n                height = h[st.pop()]\n                width = i - st[-1] - 1\n                max_a = max(max_a, height * width)\n            st.append(i)\n        return max_a\n    for i in range(m):\n        for j in range(n):\n            heights[j] = heights[j] + 1 if matrix[i][j] == '1' else 0\n        max_area = max(max_area, calcMax(heights))\n    return max_area"
    }
  },
  {
    "id": 739,
    "title": "每日温度",
    "englishTitle": "Daily Temperatures",
    "difficulty": "中等",
    "category": "单调栈",
    "description": "给定每天温度，返回下一个更高温度出现在几天后。",
    "intuition": "【单调递减栈】栈存下标。遍历时遇温度大于栈顶，说明找到更高温度，弹出计算 `i - prev`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length; int[] ans = new int[n];\n    Stack<Integer> st = new Stack<>();\n    for (int i = 0; i < n; i++) {\n        while (!st.isEmpty() && temperatures[i] > temperatures[st.peek()]) {\n            int prev = st.pop(); ans[prev] = i - prev;\n        }\n        st.push(i);\n    }\n    return ans;\n}",
      "python": "def dailyTemperatures(temperatures: List[int]) -> List[int]:\n    ans, st = [0] * len(temperatures), []\n    for i, t in enumerate(temperatures):\n        while st and t > temperatures[st[-1]]:\n            prev = st.pop(); ans[prev] = i - prev\n        st.append(i)\n    return ans"
    }
  }
];
