from rest_framework import serializers

from report.models import Report


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'Day','Salary','Comment','Expense_categories', 'Credit_Transactions','Debit_Transactions', 'Expenses')
