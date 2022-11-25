export type folderResponse = [
  {
    _id: string;
    name: string;
    from_lang: string;
    to_lang: string;
    owner_id: string;
    contributors: [
      {
        contributor_id: string;
        permission_type: { $numberInt: string };
      }
    ];
  }
];
