import pandas as pd

df = pd.read_csv("data/census_wide_1956_ct.csv", dtype = {'geosid':str})

df["cma"] = df["geosid"].str[:3]

df = df.loc[df["cma"] == '535']

dfsp = df.loc[df["geosid"] == '5350034.00']


print(dfsp["pop__tot1956ttd"])
# print(dfsp["dwam_tot1951ttd"])
print(dfsp["hhsz_tot1956ttd"])





# print("unemployment")

# print(dfsp["lfaainlfempl1951tt2"].sum() / dfsp["lfaainlf_tot1951tt1"].sum())

# print(df["lfaainlfempl1951tt2"].sum() / df["lfaainlf_tot1951tt1"].sum())

# print("median income families")

# print(dfsp["icca_med1951ttn"])

# print(df["icca_med1951ttn"].sum() / 257)