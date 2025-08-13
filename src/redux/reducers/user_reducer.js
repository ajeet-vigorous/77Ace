import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userServices } from "../services/user_services";


const initialState = {
  
};

export const getAccountStatement = createAsyncThunk(
  "user/getAccountStatement",
  async (reqData, { rejectWithValue }) => {
    try {
      const userMatchList = await userServices.getUserStatement(reqData);
      return userMatchList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBetListfunc = createAsyncThunk(
  "sports/betsList",
  async (payload, { rejectWithValue }) => {
    try {
      const casinoListByCateogeory = await userServices.getBetList(payload);

      return casinoListByCateogeory;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const domainSettings = createAsyncThunk(
  "user/domainSettings",
  async (payload, { rejectWithValue }) => {
    try {
      const domainSettings = await userServices.getDomainSettings(payload);

      return domainSettings;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const depositeRequest = createAsyncThunk(
  "user/depositeRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await userServices.depositeRequest(payload);

      return user;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const saveAccountDetails = createAsyncThunk(
  "user/saveAccountDetails",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await userServices.saveAccountDetails(payload);

      return user;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);


export const getClientExposure = createAsyncThunk(
  "sports/getClientExposure",
  async (payload, { rejectWithValue }) => {
    try {
      const casinoListByCateogeory = await userServices.getBetList(payload);

      return casinoListByCateogeory;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);


export const userUpdate = createAsyncThunk(
  "user/userUpdate",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await userServices.userUpdate(payload);

      return user;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const getUserBalance = createAsyncThunk(
  "user/getUserBalance",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await userServices.getUserBalance(payload);

      return user;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const getBankDetailsByUserId = createAsyncThunk(
  "website/getBankDetailsByUserId",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userServices.getBankDetailsByUserId();
      // message.success(user?.message, 2);
      return response;
    } catch (error) {
      // message.error(error?.data?.message, 2);
      return rejectWithValue(error.message);
    }
  }
);

export const getAccountDetailsofClient = createAsyncThunk(
  "website/getAccountDetailsofClient",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await userServices.getAccountDetailsofClient();
      // message.success(user?.message, 2);
      return response;
    } catch (error) {
      // message.error(error?.data?.message, 2);
      return rejectWithValue(error.message);
    }
  }
);

export const  withDrawRequest = createAsyncThunk(
  "user/withDrawRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const user = await userServices.withDrawRequest(payload);

      return user;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountStatement.pending, (state) => {
        state.loading = true;
        state.accountStatement = [];
      })
      .addCase(getAccountStatement.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.accountStatement = action.payload?.data;
      })
      .addCase(getAccountStatement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.accountStatement = [];
      })

      .addCase(userUpdate.pending, (state) => {
        state.loading = true;
        state.userUpdate = [];
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.userUpdate = action.payload?.data;
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.userUpdate = [];
      })

      .addCase(getBetListfunc.pending, (state) => {
        state.loading = true;
        state.betList = [];
      })
      .addCase(getBetListfunc.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.betList = action.payload?.data;
      })
      .addCase(getBetListfunc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.betList = [];
      })

      .addCase(getClientExposure.pending, (state) => {
        state.loading = true;
        state.exposureData = [];
      })
      .addCase(getClientExposure.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = true;
        state.exposureData = action?.payload?.data;
        
        
      })
      .addCase(getClientExposure.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.exposureData = [];
      })

      .addCase(getUserBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.userBalance = action.payload?.data;
      })
      .addCase(getUserBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBankDetailsByUserId.pending, (state) => {
        state.casinoLoading = true;
      })
      .addCase(getBankDetailsByUserId.fulfilled, (state, action) => {
        state.casinoLoading = false;
        state.bankDetailsData = action.payload;
      })
      .addCase(getBankDetailsByUserId.rejected, (state, action) => {
        state.casinoLoading = false;
        state.error = action.payload;
      })

      .addCase(domainSettings.pending, (state) => {
        state.loading = true;
      })
      .addCase(domainSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.domainSettings = action.payload;
      })
      .addCase(domainSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(depositeRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositeRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.depositeRequest = action.payload;
      })
      .addCase(depositeRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(saveAccountDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.saveAccountDetails = action.payload;
      })
      .addCase(saveAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAccountDetailsofClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccountDetailsofClient.fulfilled, (state, action) => {
        state.loading = false;
        state.getAccountDetails = action.payload;
      })
      .addCase(getAccountDetailsofClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(withDrawRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(withDrawRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.withDrawRequest = action.payload;
      })
      .addCase(withDrawRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
