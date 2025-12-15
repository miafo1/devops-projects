from rest_framework import serializers
from .models import Restaurant, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')

class RestaurantSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    
    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ('owner', 'created_at', 'updated_at')
