class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.data = []
        self.sortData = []

    def push(self, val: int) -> None:
        self.data.append(val)
        self.sortData = sorted(self.data)

    def pop(self) -> None:
        self.data.pop()
        self.sortData = sorted(self.data)


    def top(self) -> int:
        return self.data[len(self.data)-1]

    def getMin(self) -> int:
        return self.sortData[0]