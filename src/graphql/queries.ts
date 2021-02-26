/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItemDetail = /* GraphQL */ `
  query GetItemDetail($id: ID!) {
    getItemDetail(id: $id) {
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
export const listItemDetails = /* GraphQL */ `
  query ListItemDetails(
    $filter: ModelItemDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getShipping = /* GraphQL */ `
  query GetShipping($id: ID!) {
    getShipping(id: $id) {
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
export const listShippings = /* GraphQL */ `
  query ListShippings(
    $filter: ModelShippingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShippings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSprinkle = /* GraphQL */ `
  query GetSprinkle($id: ID!) {
    getSprinkle(id: $id) {
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
export const listSprinkles = /* GraphQL */ `
  query ListSprinkles(
    $filter: ModelSprinkleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSprinkles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
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
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNotice = /* GraphQL */ `
  query GetNotice($id: ID!) {
    getNotice(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const listNotices = /* GraphQL */ `
  query ListNotices(
    $filter: ModelNoticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const userByOwner = /* GraphQL */ `
  query UserByOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCakes = /* GraphQL */ `
  query ListCakes(
    $filter: ModelCakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCake = /* GraphQL */ `
  query GetCake($id: ID!) {
    getCake(id: $id) {
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
