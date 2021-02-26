/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      fullName
      birthday
      gender
      allowNotification
      isAgreeTermOfService
      isAgreeMarketingReceivement
      isAgreePrivacyPolicy
      owner
      email
      phoneNumber
      addresses {
        items {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      questions {
        items {
          id
          title
          content
          status
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      cakes {
        items {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createCake = /* GraphQL */ `
  mutation CreateCake(
    $input: CreateCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    createCake(input: $input, condition: $condition) {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateCake = /* GraphQL */ `
  mutation UpdateCake(
    $input: UpdateCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    updateCake(input: $input, condition: $condition) {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteCake = /* GraphQL */ `
  mutation DeleteCake(
    $input: DeleteCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    deleteCake(input: $input, condition: $condition) {
      id
      itemImageKey
      title
      content
      dueDate
      status
      userID
      sprinkles {
        items {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      itemDetail {
        items {
          id
          confirmedPrice
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      shipping {
        id
        receipt
        status
        addressID
        address {
          id
          addressMain
          addressDetail
          receiverName
          phoneNumber
          userID
          createdAt
          updatedAt
        }
        cakeID
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      selfPayment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const createItemDetail = /* GraphQL */ `
  mutation CreateItemDetail(
    $input: CreateItemDetailInput!
    $condition: ModelItemDetailConditionInput
  ) {
    createItemDetail(input: $input, condition: $condition) {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const updateItemDetail = /* GraphQL */ `
  mutation UpdateItemDetail(
    $input: UpdateItemDetailInput!
    $condition: ModelItemDetailConditionInput
  ) {
    updateItemDetail(input: $input, condition: $condition) {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const deleteItemDetail = /* GraphQL */ `
  mutation DeleteItemDetail(
    $input: DeleteItemDetailInput!
    $condition: ModelItemDetailConditionInput
  ) {
    deleteItemDetail(input: $input, condition: $condition) {
      id
      product {
        name
        manufacturer
        modelNo
        price
      }
      confirmedPrice
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const createShipping = /* GraphQL */ `
  mutation CreateShipping(
    $input: CreateShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    createShipping(input: $input, condition: $condition) {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const updateShipping = /* GraphQL */ `
  mutation UpdateShipping(
    $input: UpdateShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    updateShipping(input: $input, condition: $condition) {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const deleteShipping = /* GraphQL */ `
  mutation DeleteShipping(
    $input: DeleteShippingInput!
    $condition: ModelShippingConditionInput
  ) {
    deleteShipping(input: $input, condition: $condition) {
      id
      receipt
      status
      addressID
      address {
        id
        addressMain
        addressDetail
        receiverName
        phoneNumber
        userID
        shipping {
          nextToken
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
      }
      cakeID
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const createSprinkle = /* GraphQL */ `
  mutation CreateSprinkle(
    $input: CreateSprinkleInput!
    $condition: ModelSprinkleConditionInput
  ) {
    createSprinkle(input: $input, condition: $condition) {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const updateSprinkle = /* GraphQL */ `
  mutation UpdateSprinkle(
    $input: UpdateSprinkleInput!
    $condition: ModelSprinkleConditionInput
  ) {
    updateSprinkle(input: $input, condition: $condition) {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const deleteSprinkle = /* GraphQL */ `
  mutation DeleteSprinkle(
    $input: DeleteSprinkleInput!
    $condition: ModelSprinkleConditionInput
  ) {
    deleteSprinkle(input: $input, condition: $condition) {
      id
      amount
      currency
      message
      userID
      cakeID
      payment {
        id
        type
        status
        amount
        virtualAccountNumber
        cakeID
        sprinkleID
        sprinkle {
          id
          amount
          currency
          message
          userID
          cakeID
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
      owner
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      title
      content
      status
      reply {
        createdAt
        content
      }
      userID
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      addressMain
      addressDetail
      receiverName
      phoneNumber
      userID
      shipping {
        items {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      user {
        id
        fullName
        birthday
        gender
        allowNotification
        isAgreeTermOfService
        isAgreeMarketingReceivement
        isAgreePrivacyPolicy
        owner
        email
        phoneNumber
        addresses {
          nextToken
        }
        sprinkles {
          nextToken
        }
        questions {
          nextToken
        }
        createdAt
        updatedAt
        cakes {
          nextToken
        }
      }
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
      id
      type
      status
      amount
      virtualAccountNumber
      cakeID
      sprinkleID
      sprinkle {
        id
        amount
        currency
        message
        userID
        cakeID
        payment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        cake {
          id
          itemImageKey
          title
          content
          dueDate
          status
          userID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      createdAt
      updatedAt
      cake {
        id
        itemImageKey
        title
        content
        dueDate
        status
        userID
        sprinkles {
          nextToken
        }
        itemDetail {
          nextToken
        }
        shipping {
          id
          receipt
          status
          addressID
          cakeID
          createdAt
          updatedAt
        }
        selfPayment {
          id
          type
          status
          amount
          virtualAccountNumber
          cakeID
          sprinkleID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        user {
          id
          fullName
          birthday
          gender
          allowNotification
          isAgreeTermOfService
          isAgreeMarketingReceivement
          isAgreePrivacyPolicy
          owner
          email
          phoneNumber
          createdAt
          updatedAt
        }
        owner
      }
    }
  }
`;
export const createNotice = /* GraphQL */ `
  mutation CreateNotice(
    $input: CreateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    createNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateNotice = /* GraphQL */ `
  mutation UpdateNotice(
    $input: UpdateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    updateNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotice = /* GraphQL */ `
  mutation DeleteNotice(
    $input: DeleteNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    deleteNotice(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
