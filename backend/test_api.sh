#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

BASE_URL="http://localhost:3000/api"
JWT_TOKEN=""

echo -e "${YELLOW}=== Starting API Tests ===${NC}\n"

# 1. Register
echo -e "${YELLOW}1. Testing Register...${NC}"
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com", 
    "password": "password123"
  }')

echo "$REGISTER_RESPONSE"
JWT_TOKEN=$(echo "$REGISTER_RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)
echo -e "Token: $JWT_TOKEN\n"

# 2. Login
echo -e "${YELLOW}2. Testing Login...${NC}"
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }')

echo "$LOGIN_RESPONSE"
JWT_TOKEN=$(echo "$LOGIN_RESPONSE" | grep -o '"token":"[^"]*' | cut -d'"' -f4)
echo -e "Token: $JWT_TOKEN\n"

# 3. Create Content
echo -e "${YELLOW}3. Testing Create Content...${NC}"
CREATE_RESPONSE=$(curl -s -X POST "$BASE_URL/content" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -d '{
    "title": "Test Content",
    "description": "Test Description", 
    "body": "Test Body Content"
  }')

echo "$CREATE_RESPONSE"
CONTENT_ID=$(echo "$CREATE_RESPONSE" | grep -o '"id":\d*' | cut -d':' -f2)
echo -e "Content ID: $CONTENT_ID\n"

# 4. List Contents
echo -e "${YELLOW}4. Testing List Contents...${NC}"
curl -s -X GET "$BASE_URL/content" \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.'

# 5. Get Content by ID
echo -e "${YELLOW}5. Testing Get Content by ID...${NC}"
curl -s -X GET "$BASE_URL/content/$CONTENT_ID" \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.'

# 6. Update Content
echo -e "${YELLOW}6. Testing Update Content...${NC}"
curl -s -X PUT "$BASE_URL/content/$CONTENT_ID" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -d '{
    "title": "Updated Title",
    "description": "Updated Description",
    "body": "Updated Body Content"
  }' | jq '.'

# 7. Delete Content  
echo -e "${YELLOW}7. Testing Delete Content...${NC}"
curl -s -X DELETE "$BASE_URL/content/$CONTENT_ID" \
  -H "Authorization: Bearer $JWT_TOKEN" | jq '.'

echo -e "${GREEN}=== All Tests Completed ===${NC}"