from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        RESTAURANT_OWNER = "RESTAURANT_OWNER", "Restaurant Owner"
        CUSTOMER = "CUSTOMER", "Customer"
        DELIVERY_AGENT = "DELIVERY_AGENT", "Delivery Agent"

    role = models.CharField(max_length=50, choices=Role.choices, default=Role.CUSTOMER)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"
