"""
Inheritance
Can extend a class using another class.
→ a class inherits methods and properties of another class.
→ DRY<Don't Repeat Yourself>
------------------------------------------------------

Biology Classification
------------------------------------------------------

Shapes
Rectangle and Square . <triangle>
--- shapes .<shape_name>
--- sides . <rectangle,square,trapezium> sidea,sideb,sidec
--- area.<>
--- methods. perimeter of the rectangle
------------------------------------------------------
"""


class Rectangle:

    def __init__(self,length,width):
        self.length=length
        self.width=width
        self.shape_name="Rectangle"

    def area(self):
        area=self.length*self.width
        print(f"For rectangle of length {self.length} and width {self.width} area: {area}")


class Square:

    def __init__(self,side):
        self.length=side
        self.width=side
        self.shape_name="Square"

    def area(self):
        area=self.length*self.width
        print(f"For square of length {self.length} and width {self.width} is area: {area}")


r1=Rectangle(length=20,width=10)
r1.area()

r1.shape_name()

s1=Square(side=10)
s1.area()