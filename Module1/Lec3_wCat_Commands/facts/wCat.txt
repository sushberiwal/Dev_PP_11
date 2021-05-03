# WCat Commands

# cat f1.txt => show the output of the file f1.txt
# cat f1.txt f2.txt => show the contents of file f1.txt and f2.txt together

#f1.txt
Hey i am f1



Bye i am f1

#Flags
# -s => this flag is used to remove extra spaces from the output
output => 
Hey i am f1

Bye i am f1


# -b => this flag is used to add a line number on non empty lines
output => 
1.Hey i am f1



2.Bye i am f1


# -n => this flag is used to add a line number on all the lines including empty lines
output => 
1.Hey i am f1
2.
3.
4.
5.Bye i am f1


-b and -n flag are exclusive so the flag which has a lower index will be considered !