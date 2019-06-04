from django.db import models

# Create your models here.
class Report(models.Model):
    Day = models.CharField(max_length=30)
    Salary = models.IntegerField()
    Comment = models.TextField()
    Expense_categories = models.CharField(max_length=120)
    Credit_Transactions = models.IntegerField()
    Debit_Transactions = models.IntegerField()
    Expenses = models.IntegerField()

    def __str__(self):
        return self.Day
