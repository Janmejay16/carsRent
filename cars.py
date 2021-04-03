lst = []
"""
WagonR 800 5 18 petrol compact vadodara
DatsonGo 800 5 19 perol compact leh
i10Grand 1200  5 16 petrol compact ladakh
ignis 1000 5 19 petrol compact goa
sedan 1400 5 19 diesel sedan udaipur
suv 2000 7 8 diesel suv ladakh
muv 2500 8 10 diesel muv leh  
jeep 2000 6 12 diesel jeep goa
"""

print("""name rent seats mileage fuel car location""")
for i in range(8):
    lst.append(input().split())


print("{")
for i in lst:
    print("\t{")
    print("\t\t\"name\": \""+i[0]+"\",")
    print("\t\t\"rent\": \""+i[1]+"\",")
    print("\t\t\"seats\": \""+i[2]+"\",")
    print("\t\t\"mileage\": \""+i[3]+"\",")
    print("\t\t\"fuel\": \""+i[4]+"\",")
    print("\t\t\"type\": \""+i[5]+"\",")
    print("\t\t\"location\": \""+i[6]+"\"")
    print("\t},")
print("}")